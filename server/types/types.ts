export interface BlitCoordinates {
    x: number;
    y: number;
}

interface Color {
    apply: string;
    params: number[] | string[];
}

export type ColorOptions = Color[];