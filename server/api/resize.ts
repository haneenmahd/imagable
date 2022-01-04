import jimp from 'jimp';
import { ResizeOptions } from '../types/types';

export default async function resize(file: string, options: ResizeOptions) {
    const image = await jimp.read(file);

    image.resize(options.width, options.height || jimp.AUTO);

    // Save and overwrite the image
    await image.writeAsync('test/image.png');
}
