export interface BlitCoordinates {
	x: number;
	y: number;
}

export enum FeatureBriefCardColors {
	PINK,
	GREEN,
	VIOLET,
	SKIN
}

interface Color {
	apply: string;
	params: number[] | string[];
}

export interface ResizeOptions {
	height: number;
	width: number;
}

export interface OptimizeOptions {
	height: number;
	width: number;
	quality: number;
	outputPath: string;
}

export interface ScaleOptions {
	height: number;
	width: number;
}

export type ColorOptions = Color[];
