import jimp from 'jimp';

export default async function pixelate(file: string, level: number) {
    const image = await jimp.read(file);

    image.pixelate(level);
}
