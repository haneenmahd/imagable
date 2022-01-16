import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import archiver from 'archiver';
import resize from './src/api/resize';
import resizeAll from './src/resizeForAll';
import makeSure from './src/utils/makeSure';

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

app.post('/api/resizer', upload.single('image-file'), async (req, res) => {
	const filePath = path.resolve(process.cwd(), req.file.path);

	await resize(filePath, { height: 100, width: 100 });

	res.sendFile(filePath);
});

app.post('/api/allResize', upload.single('image-file'), async (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/zip',
		'Content-disposition': 'attachment; filename=user-data/icon-set-imagable.zip',
	});

	const filePath = path.resolve(process.cwd(), 'user-data', req.file.filename);
	const zip = archiver('zip');

	await resizeAll(filePath);

	zip.pipe(res);

	zip.directory('./user-data/icon-set-imagable', 'icon-set-imagable').finalize();
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
