import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

export default function donwloadAsZip(output: string, directory: string) {
	const stream = fs.createWriteStream(path.resolve(process.cwd(), output));
	const archive = archiver('zip');

	archive.on('error', (e) => {
		console.error(e);

		return;
	});

	stream.on('close', () => {
		console.log(archive.pointer() + ' total bytes compressed');
	});

	archive.pipe(stream);

	archive.directory(directory, path.basename(directory));

	archive.finalize();
}
