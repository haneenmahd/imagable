import archiver from 'archiver';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import fs from 'fs';
import { ImageBuffer, PlatformIcon } from '@/types';
import resize from './resize';

export default async function packageImage(buffer: ImageBuffer, platformIcons: PlatformIcon[]) {
    const uuid = uuidv4();
    const zipFileName = `${uuid}.zip`;
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });
    const output = fs.createWriteStream(zipFileName);

    for (const platformIcon of platformIcons) {
        const iconSizes = [...platformIcon.iconSizes];

        if (platformIcon.spotlightIconSizes) {
            iconSizes.push(...platformIcon.spotlightIconSizes);
        }

        if (platformIcon.settingsIconSizes) {
            iconSizes.push(...platformIcon.settingsIconSizes);
        }

        if (platformIcon.notificationIconSizes) {
            iconSizes.push(...platformIcon.notificationIconSizes);
        }

        for (const icon of iconSizes) {
            const scaleKeys = Object.keys(icon.resolutions);

            for (const scale of scaleKeys) {
                const option = icon.resolutions[scale];
                const resizedImage = await resize(buffer, option);

                archive.append(resizedImage, {
                    name: `${icon.name}_${scale}_${option.width}x${option.height}.png`
                });
            }
        }
    }

    archive.pipe(output);
    await archive.finalize();

    return zipFileName;
}
