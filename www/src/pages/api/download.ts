import formZipFilePath from "@/lib/util/formZipFilePath";
import { NextApiRequest, NextApiResponse } from "next";
import { createReadStream } from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const zipFilePath = formZipFilePath(id as string);

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${id}`);

    const stream = createReadStream(zipFilePath);
    stream.pipe(res);
}