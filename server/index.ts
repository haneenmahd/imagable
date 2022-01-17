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
import generatePath from './src/utils/generatePath';

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
	methods: ['GET', 'POST'],
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
		files: {
			size: number;
			path: string;
		}[];
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
					files: [
						{
							size: 1024,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'1024x1024.png'
							),
						},
					],
				},
				{
					folderName: 'iPad Pro',
					files: [
						{
							size: 167,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'167x167.png'
							),
						},
					],
				},
				{
					folderName: 'iPad Pro, iPad, iPad Mini',
					files: [
						{
							size: 40,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'40x40.png'
							),
						},
						{
							size: 58,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'58x58.png'
							),
						},
						{
							size: 80,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'80x80.png'
							),
						},
					],
				},
				{
					folderName: 'iPad, iPad Mini',
					files: [
						{
							size: 152,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'152x152.png'
							),
						},
					],
				},
				{
					folderName: 'iPhone',
					files: [
						{
							size: 40,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'40x40.png'
							),
						},
						{
							size: 58,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'58x58.png'
							),
						},
						{
							size: 80,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'80x80.png'
							),
						},
						{
							size: 120,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'App Store/',
								'120x120.png'
							),
						},
					],
				},
			],
		},
	];

	res.end(JSON.stringify(response));
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
