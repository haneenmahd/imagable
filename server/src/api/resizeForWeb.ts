import resize from '../api/resize';
import data from '../../data/data.json';
import { IconSizeData } from '../../types/types';
import path from 'path';

/**
 * Writes and generates icon for web platform.
 *
 * The Core Function of the API.
 */
export default async (file: string) => {
	const iconSizeData: IconSizeData = data;

	// iconSizeData's index number 2 is web's icon data
	const webData = iconSizeData[2];

	webData.iconSizes.forEach(async (icon) => {
		if (icon.resolutions['1x'] !== undefined) {
			const outputFileName = path.resolve(
				`${path.dirname(file)}/icon-set-imagable`,
				'web',
				icon.name,
				`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
			);

			await resize(file, icon.resolutions['1x'], outputFileName);

			console.log('web', icon.name, 'Done');
		} else if (icon.resolutions['2x'] !== undefined) {
			const outputFileName = path.resolve(
				`${path.dirname(file)}/icon-set-imagable`,
				'web',
				icon.name,
				`${icon.resolutions['2x']?.height}x${icon.resolutions['2x']?.width}.png`
			);

			await resize(file, icon.resolutions['2x'], outputFileName);

			console.log('web', icon.name, 'Done');
		} else if (icon.resolutions['3x'] !== undefined) {
			const outputFileName = path.resolve(
				`${path.dirname(file)}/icon-set-imagable`,
				'web',
				icon.name,
				`${icon.resolutions['3x']?.height}x${icon.resolutions['3x']?.width}.png`
			);

			await resize(file, icon.resolutions['3x'], outputFileName);

			console.log('web', icon.name, 'Done');
		}
	});
};
