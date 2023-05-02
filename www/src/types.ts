export type ImageBuffer = Buffer;

export type ImageOption = {
    height: number;
    width: number;
}

export type Icon = {
    name: string;
    resolutions: {
        [scale: string]: {
            width: number;
            height: number;
        };
    };
}

export type PlatformIcon = {
    iconPlatform: string;
    iconSizes: Icon[];
    spotlightIconSizes?: Icon[];
    settingsIconSizes?: Icon[];
    notificationIconSizes?: Icon[];
}

export interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
}