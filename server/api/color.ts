import jimp from 'jimp';
import { ColorOptions } from '../types/types';

export default async function color(file: string, options: ColorOptions) {
    const image = await jimp.read(file);
    // converting to a normal object becuase image.color won't accept type options
    const _options = Object(options);

    image.color(_options);
}
