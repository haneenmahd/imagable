import jimp from 'jimp';
import { ResizeOptions } from '../types/types';

export default async function scale(file: string, options: ResizeOptions) {
	const image = await jimp.read(file);

	image.scaleToFit(options.width, options.height);
}
