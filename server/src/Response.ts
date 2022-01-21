import generatePath from './utils/generatePath';

interface FilesObject {
	folderName: string;
	files: {
		size: number;
		path: string;
	}[];
}

interface ResponseDataObject {
	folderName: string;
	files: FilesObject[];
}

type ResponseData = ResponseDataObject[];

const response: ResponseData = [
	{
		folderName: 'apple',
		files: [
			{
				folderName: 'App Store',
				files: [
					{
						size: 1024,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'App Store/',
							'1024x1024.png'
						),
					},
				],
			},
			{
				folderName: 'iPad Pro',
				files: [
					{
						size: 167,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPad Pro/',
							'167x167.png'
						),
					},
				],
			},
			{
				folderName: 'iPad Pro, iPad, iPad Mini',
				files: [
					{
						size: 40,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPad Pro, iPad, iPad Mini/',
							'40x40.png'
						),
					},
					{
						size: 58,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPad Pro, iPad, iPad Mini/',
							'58x58.png'
						),
					},
					{
						size: 80,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPad Pro, iPad, iPad Mini/',
							'80x80.png'
						),
					},
				],
			},
			{
				folderName: 'iPad, iPad Mini',
				files: [
					{
						size: 152,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPad, iPad Mini/',
							'152x152.png'
						),
					},
				],
			},
			{
				folderName: 'iPhone',
				files: [
					{
						size: 40,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPhone/',
							'40x40.png'
						),
					},
					{
						size: 58,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPhone/',
							'58x58.png'
						),
					},
					{
						size: 80,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPhone/',
							'80x80.png'
						),
					},
					{
						size: 120,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'apple/',
							'iPhone/',
							'120x120.png'
						),
					},
				],
			},
		],
	},
	{
		folderName: 'android',
		files: [
			{
				folderName: 'Google Play',
				files: [
					{
						size: 512,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'Google Play/',
							'512x512.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-xhdpi',
				files: [
					{
						size: 96,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-xhdpi/',
							'96x96.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-hdpi',
				files: [
					{
						size: 72,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-hdpi/',
							'72x72.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-ldpi',
				files: [
					{
						size: 36,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-ldpi/',
							'36x36.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-mdpi',
				files: [
					{
						size: 48,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-mdpi/',
							'48x48.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-xxhdpi',
				files: [
					{
						size: 144,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-xxhdpi/',
							'144x144.png'
						),
					},
				],
			},
			{
				folderName: 'mipmap-xxxhdpi',
				files: [
					{
						size: 192,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'android/',
							'mipmap-xxxhdpi/',
							'192x192.png'
						),
					},
				],
			},
		],
	},
	{
		folderName: 'web',
		files: [
			{
				folderName: 'ico',
				files: [
					{
						size: 16,
						path: generatePath(
							'user-data/',
							'icon-set-imagable/',
							'web/',
							'ico/',
							'16x16.png'
						),
					},
				],
			},
		],
	},
];

export default response;
