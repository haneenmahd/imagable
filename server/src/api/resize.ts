import Jimp from 'jimp';

interface ResizeOptions {
	height: number;
	width: number;
}

export default async function resize(
	file: string,
	resizeOptions: ResizeOptions = {
		height: Jimp.AUTO,
		width: 400
	}
) {
	const image = await Jimp.read(file);

	image.resize(resizeOptions.width, resizeOptions.height);
	
	await image.writeAsync(file);
}
