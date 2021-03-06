import resize from './api/resize';
import data from '../data/data.json';
import { IconSizeData } from '../types/types';
import path from 'path';

/**
 * Writes and generates icon for all platforms.
 *
 * The Core Function of the API.
 */
export default async (file: string) => {
	const iconSizeData: IconSizeData = data;

	for (const platform of iconSizeData) {
		platform.iconSizes.forEach(async (icon) => {
			if (icon.resolutions['1x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
				);

				await resize(file, icon.resolutions['1x'], outputFileName);
			} else if (icon.resolutions['2x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['2x']?.height}x${icon.resolutions['2x']?.width}.png`
				);

				await resize(file, icon.resolutions['2x'], outputFileName);
			} else if (icon.resolutions['3x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['3x']?.height}x${icon.resolutions['3x']?.width}.png`
				);

				await resize(file, icon.resolutions['3x'], outputFileName);
			}
		});

		platform.notificationIconSizes?.forEach(async (icon) => {
			if (icon.resolutions['1x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
				);

				await resize(file, icon.resolutions['1x'], outputFileName);
			} else if (icon.resolutions['2x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['2x']?.height}x${icon.resolutions['2x']?.width}.png`
				);

				await resize(file, icon.resolutions['2x'], outputFileName);
			} else if (icon.resolutions['3x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['3x']?.height}x${icon.resolutions['3x']?.width}.png`
				);

				await resize(file, icon.resolutions['3x'], outputFileName);
			}
		});

		platform.settingsIconSizes?.forEach(async (icon) => {
			if (icon.resolutions['1x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
				);

				await resize(file, icon.resolutions['1x'], outputFileName);
			} else if (icon.resolutions['2x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['2x']?.height}x${icon.resolutions['2x']?.width}.png`
				);

				await resize(file, icon.resolutions['2x'], outputFileName);
			} else if (icon.resolutions['3x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['3x']?.height}x${icon.resolutions['3x']?.width}.png`
				);

				await resize(file, icon.resolutions['3x'], outputFileName);
			}
		});

		platform.spotlightIconSizes?.forEach(async (icon) => {
			if (icon.resolutions['1x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['1x']?.height}x${icon.resolutions['1x']?.width}.png`
				);

				await resize(file, icon.resolutions['1x'], outputFileName);
			} else if (icon.resolutions['2x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['2x']?.height}x${icon.resolutions['2x']?.width}.png`
				);

				await resize(file, icon.resolutions['2x'], outputFileName);
			} else if (icon.resolutions['3x'] !== undefined) {
				const outputFileName = path.resolve(
					`${path.dirname(file)}/icon-set-imagable`,
					platform.iconPlatform,
					icon.name,
					`${icon.resolutions['3x']?.height}x${icon.resolutions['3x']?.width}.png`
				);

				await resize(file, icon.resolutions['3x'], outputFileName);
			}
		});
	}
};
