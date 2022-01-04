import jimp from 'jimp';

export default async function opacity(file: string, level: number) {
    const image = await jimp.read(file);

    image.opacity(level);
}
