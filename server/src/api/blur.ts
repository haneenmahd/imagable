import jimp from 'jimp';

export default async function blur(file: string, radius: number) {
	const image = await jimp.read(file);

	image.resize(400, jimp.AUTO);
	
	image.blur(radius);

	image.write(file);
}