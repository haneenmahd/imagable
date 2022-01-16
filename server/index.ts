import express from 'express';
import multer from 'multer';
import path from 'path';
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

app.use(express.static(path.resolve(process.cwd(), 'user-data')));
app.use((req, _res, next) => {
	console.log(
		'Requesting for route',
		req.path,
		'from',
		req.get('host'),
		'\nIP version:',
		req.socket.remoteFamily
	);

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

app.post('/api/allResize', upload.single('image-file'), async (req, res) => {
	setHeaderAsZip(res);

	const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);
	const zip = archiver('zip');

	await resizeAll(filePath);

	zip.pipe(res);

	zip.directory('./user-data/icon-set-imagable', 'icon-set-imagable').finalize();

	res.on('close', () => {
		cleanUpIconData();
	});
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
