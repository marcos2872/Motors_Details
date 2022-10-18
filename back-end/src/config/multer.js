/* eslint-disable no-param-reassign */
require('dotenv').config();
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const crypto = require('crypto');
const { S3Client } = require('@aws-sdk/client-s3');

const storageTypes = {
  local: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'));
    },
    filename: (_req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.key);
      });
    },
}),
    'aws-s3': multerS3({
      s3: new S3Client({
        region: process.env.AWS_DEFAULT_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      }),
      bucket: 'motors-api-images',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (_req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);

          const fileName = `${hash.toString('hex')}-${file.originalname}`;

          cb(null, fileName);
        });
      },
    }),

};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: storageTypes['aws-s3'],
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    const allowedMines = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
    ];
    if (allowedMines.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};