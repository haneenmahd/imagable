import jimp from 'jimp';

interface ResizeOptions {
	height: number;
	width: number;
}

export default async function resize(
	file: string,
	resizeOptions: ResizeOptions
) {
	const image = new jimp(file);

	image.resize(resizeOptions.width, resizeOptions.height);
}