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
 * Copyright © 2022: https://github.com/imagable/imagable
 * 😊
 */
export default function makeSure(): void {
	if (fs.existsSync('user-data') !== true) {
		fs.mkdir('user-data', (err) => {
			if (err) return true;
		});
	}
}
