import fs from 'fs';
import path from 'path';

export default function cleanUpIconData(): void {
	const deletePath = path.resolve(
		process.cwd(),
		'user-data',
		'icon-set-imagable'
	);

	if (fs.existsSync(deletePath)) {
		fs.rmSync(deletePath, { recursive: true });
	}

	// finalize with an empty directory
	fs.mkdirSync(deletePath);
}
