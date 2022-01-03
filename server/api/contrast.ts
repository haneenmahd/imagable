import jimp from 'jimp'

export default async function contrast(file: string, level: number) {
    const image = await jimp.read(file)

    image.contrast(level)
}