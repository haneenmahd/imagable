import Jimp from 'jimp';
import jimp from 'jimp';
import { OptimizeOptions } from '../../types/types';

export default async function optimize(
	file: string,
	options: OptimizeOptions = {
		height: Jimp.AUTO,
		width: Jimp.AUTO,
		quality: 90,
		outputPath: `${process.cwd()}/optimized-output.png`,
	}
) {
	const image = await jimp.read(file);
	image.resize(options.width, options.height);
	image.quality(options.quality);
	image.writeAsync(options.outputPath);
}
