import * as cloudinary_import from 'cloudinary';
import DataURIParser from 'datauri/parser';
import path from 'path';
import { Request } from 'express';

const parser = new DataURIParser();

const cloudinary = cloudinary_import.v2;
cloudinary.config({ 
    cloud_name: 'dsnrm77jx', 
    api_key: '431681916459295', 
    api_secret: 'cloudinary secrete key' 
  });

const dUri = (req: Request) => {
    return parser.format(
        path.extname(req.file!.originalname).toString(),
        req.file!.buffer
    );
};

const dUriPdf = (buffer: Buffer) => {
    return parser.format('.pdf', buffer);
};

export { cloudinary, dUri, dUriPdf };
