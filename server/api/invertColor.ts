import jimp from "jimp";

export default async function invertColor(file: string) {
  const image = await jimp.read(file);

  image.invert();
}
