export interface ResizeOptions {
	height: number;
	width: number;
}

export interface IconSizes {
	name: string;
	resolutions: {
		[ratio: string]: {
			width: number;
			height: number;
		};
	};
}

export interface IconSizePlatformData {
	iconPlatform: string;
	iconSizes: IconSizes[];
	spotlightIconSizes?: IconSizes[];
	settingsIconSizes?: IconSizes[];
	notificationIconSizes?: IconSizes[];
}

export type IconSizeData = IconSizePlatformData[];
