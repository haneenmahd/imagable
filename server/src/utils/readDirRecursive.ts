import glob from 'glob';

/**
 * Synchronously reads all files recursively inside a path
 */
export default function readDirRecursive(
	pattern: string,
	cb: (err: Error, matches: string[]) => void
) {
	glob(pattern, cb);
}
