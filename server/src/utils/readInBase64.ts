import fs from 'fs';

export default function readInBase64(file: string): string {
    // eslint-disable-next-line quotes
    return `data:image:/gif;base64,${fs.readFileSync(file, 'base64')}`;
}