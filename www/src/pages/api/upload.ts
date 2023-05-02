import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File, IncomingForm } from 'formidable'
// you might want to use regular 'fs' and not a promise one
import { promises as fs } from 'fs'
import packageImage from "@/lib/packageImage";
import devices from "@/data/devices.json";

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // parse form with a Promise wrapper
  const data = await new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      keepExtensions: true
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);

      resolve({ fields, files });
    })
  });

  const { files } = data as { files: Record<string, File> };

  const contents = await fs.readFile(files.file.filepath);

  const zipFileName = await packageImage(contents, devices as any);

  res.status(200).send({
    filePath: zipFileName
  })
}