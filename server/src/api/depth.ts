import jimp from 'jimp';

export default async function depth(file: string) {
	const image = await jimp.read(file);

	image.dither565();
}
