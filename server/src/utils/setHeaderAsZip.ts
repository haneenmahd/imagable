export default function setHeaderAsZip(res): void {
	res.writeHead(200, {
		'Content-Type': 'application/zip',
		'Content-disposition': 'attachment; filename=user-data/icon-set-imagable.zip',
	});
}
