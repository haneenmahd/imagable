import jimp from 'jimp';

export default async function brightness(file: string, level: number) {
    const image = await jimp.read(file);

    image.brightness(level);
}
