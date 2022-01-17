import Jimp from 'jimp';

interface ResizeOptions {
	height: number;
	width: number;
}

export default async function resize(
	file: string,
	resizeOptions: ResizeOptions = {
		height: Jimp.AUTO,
		width: 400,
	},
	output?: string
) {
	const image = await Jimp.read(file);

	image.resize(resizeOptions.width, resizeOptions.height);

	// do not lose quality
	image.quality(100);

	await image.writeAsync(
		output !== null || output !== undefined ? output : file
	);
}
