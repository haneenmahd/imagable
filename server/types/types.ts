import { AUTO } from 'jimp';

export interface BlitCoordinates {
	x: number;
	y: number;
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

export type ColorOptions = Color[];
