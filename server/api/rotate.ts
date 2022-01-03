import jimp from 'jimp'

export default async function rotate(file: string, angles: number) {
    const image = await jimp.read(file)

    image.rotate(angles)
}