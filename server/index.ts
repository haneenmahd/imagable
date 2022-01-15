import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';

import resize from './src/api/resize';
import makeSure from './src/utils/makeSure';

const port = process.env.PORT || 3000;

const app = express();

makeSure();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

// use /uploads to server the images within the response
app.use('/uploads', express.static('uploads'));

app.get('/api/icon-size-data', (req, res) => {
	res.sendFile(`${process.cwd()}/data/data.json`);
});

app.post('/api/upload', upload.single('image-file'), (req, res) => {
	const url = `${req.protocol}://${req.get('host')}`;
	console.log(JSON.stringify(req.file));

	let response = '<a href="/">Home</a><br>';
	response += 'Files uploaded successfully.<br>';
	response += `<img src='${url}/${req.file.path}' /><br>`;

	return res.send(response);
});

app.post('/api/resizer', upload.single('image-file'), async (req, res) => {
	const filePath = path.resolve(__dirname, 'uploads', req.file.filename);
	await resize(filePath, {
		height: Number(req.query.height),
		width: Number(req.query.width),
	});

	const base64 = Buffer.from(fs.readFileSync(`${filePath}`)).toString();

	res.send({ imageData: base64 });
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
