import { ImageBuffer } from "@/types";
import sharp from "sharp";

export default async function resize(imageBuffer: ImageBuffer, options: { height: number, width: number }) {
    const { height, width } = options;
    const resizedImage = await sharp(imageBuffer)
        .resize({ height, width, fit: 'inside', withoutEnlargement: true, withoutReduction: true })
        .toFormat('jpeg')
        .toBuffer();

    return resizedImage;
}
