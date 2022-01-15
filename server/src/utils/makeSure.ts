/**
 * makeSure ensures and executes everything that is needed to be ran before initializing the server
 *
 * https://github.com/imagable/imagable
 * 😊
 */

import fs from 'fs';

/**
 * `makeSure` ensures and executes everything that is needed to be ran before initializing the server
 *
 * https://github.com/imagable/imagable
 * 😊
 */
export default function makeSure(): void {
	if (fs.existsSync('uploads') !== true) {
		fs.mkdir('uploads', (err) => {
			if (err) return true;
		});
	}
}
