import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';

import blur from './src/api/blur.js';

const __dirname = process.cwd();
const port = process.env.PORT || 3000;

const app = express();

// after the server make sure we have /uploads folder to store upload data
// return to main process without throwing errors
if (fs.existsSync('uploads') !== true) {
	fs.mkdir('uploads', (err) => {
		if (err) return true;
	});
}

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

app.post('/api/upload', upload.single('image-file'), (req, res) => {
	const url = `${req.protocol}://${req.get('host')}`;
	// req.file is the `profile-file` file
	// req.body will hold the text fields, if there were any
	console.log(JSON.stringify(req.file));
	let response = '<a href="/">Home</a><br>';
	response += 'Files uploaded successfully.<br>';
	response += `<img src='${url}/${req.file.path}' /><br>`;
	return res.send(response);
});

app.post('/api/blur', upload.single('image-file'), async (req, res) => {
	const filePath = path.resolve(__dirname, 'uploads', req.file.filename);
	// req.file is the `profile-file` file
	// req.body will hold the text fields, if there were any
	await blur(filePath, 2);
	res.sendFile(filePath);
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
