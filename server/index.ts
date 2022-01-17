import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import archiver from 'archiver';
import resizeAll from './src/resizeForAll';
import makeSure from './src/utils/makeSure';
import setHeaderAsZip from './src/utils/setHeaderAsZip';
import resizeForWeb from './src/api/resizeForWeb';
import cleanUpIconData from './src/utils/cleanUpIconData';
import resizeForApple from './src/api/resizeForApple';
import resizeForAndroid from './src/api/resizeForAndroid';

const port = process.env.PORT || 3000;

const app = express();

makeSure();

const storage = multer.diskStorage({
	destination: function (_req, _file, cb) {
		cb(null, './user-data');
	},
	filename: function (_req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

const corsOptions: cors.CorsOptions = {
	origin: '*',
	methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.use(express.static(path.resolve(process.cwd(), 'user-data')));

// use /user-data to server the images within the response
app.use('/user-data', express.static('user-data'));

app.get('/api/icon-size-data', (_req, res) => {
	res.sendFile(`${process.cwd()}/data/data.json`);
});

app.post(
	'/api/resize-for-web',
	upload.single('image-file'),
	async (req, res) => {
		setHeaderAsZip(res);

		const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);
		const zip = archiver('zip');

		await resizeForWeb(filePath);

		zip.pipe(res);

		zip
			.directory('./user-data/icon-set-imagable', 'icon-set-imagable')
			.finalize();

		res.on('close', () => {
			cleanUpIconData();
		});
	}
);

app.post(
	'/api/resize-for-apple',
	upload.single('image-file'),
	async (req, res) => {
		setHeaderAsZip(res);

		const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);
		const zip = archiver('zip');

		await resizeForApple(filePath);

		zip.pipe(res);

		zip
			.directory('./user-data/icon-set-imagable', 'icon-set-imagable')
			.finalize();

		res.on('close', () => {
			cleanUpIconData();
		});
	}
);

app.post(
	'/api/resize-for-android',
	upload.single('image-file'),
	async (req, res) => {
		setHeaderAsZip(res);

		const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);
		const zip = archiver('zip');

		await resizeForAndroid(filePath);

		zip.pipe(res);

		zip
			.directory('./user-data/icon-set-imagable', 'icon-set-imagable')
			.finalize();

		res.on('close', () => {
			cleanUpIconData();
		});
	}
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
	'/api/allResize',
	upload.single('image-file'),
	async (req, _res, next) => {
		const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);

		await resizeAll(filePath);

		// continue request
		next();
	}
);

app.post('/api/allResize', upload.single('image-file'), (_req, res) => {
	res.write(
		JSON.stringify({ message: 'give out send request to /api/get-data' })
	);

	res.end();
});

app.get('/api/data', (req, res) => {
	res.setHeader('Content-Type', 'application/json');

	interface FilesObject {
		folderName: string;
		files: string[];
	}

	interface ResponseDataObject {
		folderName: string;
		files: FilesObject[];
	}

	type ResponseData = ResponseDataObject[];

	const response: ResponseData = [
		{
			folderName: 'apple',
			files: [
				{
					folderName: 'App Store',
					files: ['1024x1024.png'],
				},
				{
					folderName: 'iPad Pro',
					files: ['167x167.png'],
				},
				{
					folderName: 'iPad Pro, iPad, iPad Mini',
					files: ['40x40.png', '58x58.png', '80x80.png'],
				},
				{
					folderName: 'iPad, iPad Mini',
					files: ['152x152.png'],
				},
				{
					folderName: 'iPhone',
					files: ['40x40.png', '58x58.png', '80x80.png', '120x120.png'],
				},
			],
		},
		{
			folderName: 'android',
			files: [
				{
					folderName: 'Google Play',
					files: ['512x512.png'],
				},
				{
					folderName: 'midmap-xhdpi',
					files: ['96x96.png'],
				},
				{
					folderName: 'mipmap-hdpi',
					files: ['72x72.png'],
				},
				{
					folderName: 'mipmap-ldpi',
					files: ['36x36.png'],
				},
				{
					folderName: 'mipmap-mdpi',
					files: ['48x48.png'],
				},
				{
					folderName: 'mipmap-xxhdpi',
					files: ['144x144.png'],
				},
				{
					folderName: 'mipmap-xxxhdpi',
					files: ['192x192.png'],
				},
			],
		},
		{
			folderName: 'web',
			files: [
				{
					folderName: 'ico',
					files: ['16x16.png'],
				},
			],
		},
	];

	res.end(JSON.stringify(response));
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
