import jimp from 'jimp';
import { BlitCoordinates } from '../types/types';

export default async function blit(
    file: string,
    secondFile: string,
    coordinates: BlitCoordinates
) {
    const image = await jimp.read(file);
    const mergeImage = await jimp.read(secondFile);

    image.blit(mergeImage, coordinates.x, coordinates.y);
}
