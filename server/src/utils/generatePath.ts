import getServerUrl from './getServerUrl';

export default function generatePath(...files: string[]): string {
	const paths: string[] = [getServerUrl()];

	files.map(file => {
		paths.push(file);
	});

	return paths.join('');
}
