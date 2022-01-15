import express from 'express';
import multer from 'multer';
import path from 'path';

import resize from './src/api/resize';
import resizeAll from './src/resizeForAll';
import makeSure from './src/utils/makeSure';

const port = process.env.PORT || 3000;

const app = express();

makeSure();

const storage = multer.diskStorage({
	destination: function (_req, _file, cb) {
		cb(null, './uploads');
	},
	filename: function (_req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

app.use((req, _res, next) => {
	console.log('Requesting for route', req.path);

	next();
});

// use /uploads to server the images within the response
app.use('/uploads', express.static('uploads'));

app.get('/api/icon-size-data', (_req, res) => {
	res.sendFile(`${process.cwd()}/data/data.json`);
});

app.post('/api/resizer', upload.single('image-file'), async (req, res) => {
	const filePath = path.resolve(process.cwd(), req.file.path);

	await resize(filePath, { height: 100, width: 100 });

	res.sendFile(filePath);
});

app.get('/api/allResize', upload.single('image-file'), async (req, res) => {
	const filePath = path.resolve(process.cwd(), 'uploads', 'logo192.png');

	resizeAll(filePath);

	res.end();
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
