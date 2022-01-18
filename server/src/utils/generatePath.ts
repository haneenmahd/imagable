import getServerUrl from './getServerUrl';

export default function generatePath(...files: string[]): string {
	return `${getServerUrl()}/${files}`;
}
