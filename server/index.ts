import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import httpProxy from 'http-proxy';
import expressRateLimit from 'express-rate-limit';
import resizeAll from './src/resizeForAll';
import makeSure from './src/utils/makeSure';
import response from './src/Response';

const app = express();
const port = process.env.PORT || 3000;
const apiLimiter = expressRateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

// creating the proxy servers
httpProxy
	.createServer({
		target: `http://localhost:${port}`,
	})
	.listen(8083);

httpProxy
	.createServer({
		target: `http://localhost:${port}`,
	})
	.listen(4041);

httpProxy
	.createServer({
		target: `http://localhost:${port}`,
	})
	.listen(80033);

httpProxy
	.createServer({
		target: `http://localhost:${port}`,
	})
	.listen(1999);

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

app.use(apiLimiter);
app.use(cors(corsOptions));
app.use(express.static(path.resolve(process.cwd(), 'user-data')));
app.use('/user-data', express.static('user-data'));

app.get('/api/icon-size-data', (_req, res) => {
	res.sendFile(`${process.cwd()}/data/data.json`);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
	'/api/allResize',
	upload.single('image-file'),
	async (req, res, next) => {
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

	res.end(JSON.stringify(response));
});

app.listen(port, () =>
	console.log(`Server running on port ${port}!\nClick http://localhost:3000/`)
);
