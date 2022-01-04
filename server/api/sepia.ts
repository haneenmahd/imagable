import jimp from 'jimp';

export default async function sepia(file: string) {
	const image = await jimp.read(file);

	image.sepia();
}
