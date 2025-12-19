import multer from "multer";
import sharp from "sharp";
import fs from "fs";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const cropAndSave = async (file, path) => {
  await sharp(file.buffer)
    .resize(450, 350)
    .toFile(path);
};

export default upload;
