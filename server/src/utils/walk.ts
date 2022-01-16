import fs from 'fs';
import path from 'path';

const walk = (
	dir: string,
	done: (error: Error, results?: string[]) => void
) => {
	let results = [];
	fs.readdir(dir, (err, list) => {
		if (err) return done(err);

		let pending = list.length;
		if (!pending) return done(null, results);

		list.forEach(file => {
			file = path.resolve(dir, file);
			
			fs.stat(file, (err, stat) => {
				if (stat && stat.isDirectory()) {
					walk(file, (err, res) => {
						results = results.concat(res);
						if (!--pending) done(null, results);
					});
				} else {
					results.push(file);
					if (!--pending) done(null, results);
				}
			});
		});
	});
};

export default walk;
