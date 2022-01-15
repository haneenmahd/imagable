import fs from 'fs';
import toIco from 'to-ico';

const files = [
	fs.readFileSync('unicorn-16x16.png'),
	fs.readFileSync('unicorn-32x32.png'),
];

toIco(files).then((buf) => {
	fs.writeFileSync('favicon.ico', buf);
});
