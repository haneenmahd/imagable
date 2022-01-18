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

// clean up
app.use((req, res, next) => {
	cleanUpIconData();

	next();
});

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
								'iPad Pro/',
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
								'iPad Pro, iPad, iPad Mini/',
								'40x40.png'
							),
						},
						{
							size: 58,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'iPad Pro, iPad, iPad Mini/',
								'58x58.png'
							),
						},
						{
							size: 80,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'iPad Pro, iPad, iPad Mini/',
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
								'iPad, iPad Mini/',
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
								'iPhone/',
								'40x40.png'
							),
						},
						{
							size: 58,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'iPhone/',
								'58x58.png'
							),
						},
						{
							size: 80,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'iPhone/',
								'80x80.png'
							),
						},
						{
							size: 120,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'apple/',
								'iPhone/',
								'120x120.png'
							),
						},
					],
				},
			],
		},
		{
			folderName: 'android',
			files: [
				{
					folderName: 'Google Play',
					files: [
						{
							size: 512,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'Google Play/',
								'512x512.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-xhdpi',
					files: [
						{
							size: 96,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-xhdpi/',
								'96x96.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-hdpi',
					files: [
						{
							size: 72,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-hdpi/',
								'72x72.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-ldpi',
					files: [
						{
							size: 36,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-ldpi/',
								'36x36.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-mdpi',
					files: [
						{
							size: 48,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-mdpi/',
								'48x48.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-xxhdpi',
					files: [
						{
							size: 144,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-xxhdpi/',
								'144x144.png'
							),
						},
					],
				},
				{
					folderName: 'mipmap-xxxhdpi',
					files: [
						{
							size: 192,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'android/',
								'mipmap-xxxhdpi/',
								'192x192.png'
							),
						},
					],
				},
			],
		},
		{
			folderName: 'web',
			files: [
				{
					folderName: 'ico',
					files: [
						{
							size: 16,
							path: generatePath(
								'user-data/',
								'icon-set-imagable/',
								'web/',
								'ico/',
								'16x16.png'
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
