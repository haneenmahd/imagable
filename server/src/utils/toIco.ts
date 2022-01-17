import fs from 'fs';
import _toIco from 'to-ico';

/**
 * Converts a specific file to .ico format
 * @param file Input filename
 * @param output Ouput file path
 * @returns {boolean} Returns true
 */
export default function toIco(file: string, output: string): boolean {
	_toIco([file]).then((buf) => {
		fs.writeFileSync(output, buf);
	});

	return true;
}
