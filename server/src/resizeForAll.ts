import resize from './api/resize';
import data from '../data/data.json';
import { IconSizeData } from '../types/types';
import path from 'path';

/**
 * Writes and generates icon for all platforms.
 *
 * The Core Function of the API.
 *
 * NOTE: fix undefined file names. This is caused by icon objects which do not '1x' property. Use '2x' or '3x' if available.
 */
export default async (file: string) => {
	const iconSizeData: IconSizeData = data;

	for (const platform of iconSizeData) {
		platform.iconSizes.forEach(async (icon) => {
			const outputFileName = path.resolve(
				path.dirname(file),
				icon.name,
				`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
			);

			await resize(file, icon.resolutions['1x'], outputFileName);
		});

		platform.notificationIconSizes?.forEach((size) => {
			console.log(size.resolutions['2x'].width);
		});
	}
};
