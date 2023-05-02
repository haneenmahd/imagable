import type { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type'));
    }
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const buffer = await handleFileUpload(req);
    const resizedImage = await resizeImage(buffer);

    // Do something with the resized image, such as save it to disk or upload it to a cloud storage service

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Failed to process image' });
  }
}

function handleFileUpload(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    upload.single('image')(req, {} as NextApiResponse, (err: any) => {
      if (err) {
        reject(err);
      } else {
        const buffer = req.file.buffer;
        resolve(buffer);
      }
    });
  });
}

async function resizeImage(buffer: Buffer): Promise<Buffer> {
  const resizedImage = await sharp(buffer).resize(400, 400).toBuffer();
  return resizedImage;
}
