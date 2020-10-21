require('dotenv').config();

const { format } = require('date-fns');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const uuid = require('uuid');

const imageUploadPath = path.join(__dirname, process.env.UPLOADS_DIR);

// Format a date to DB
function formatDateToDB(date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

// Save a photo and get filename
async function processAndSavePhoto(uploadedImage) {
  // Random File name to be saved
  const savedFileName = `${uuid.v1()}.jpg`;

  // Create the upload path
  await fs.mkdir(imageUploadPath, { recursive: true });

  // Process image
  const finalImage = sharp(uploadedImage.data);

  // Check image size
  const imageInfo = await finalImage.metadata();

  // If image is wider than 500px resize it
  if (imageInfo.width > 800) {
    finalImage.resize(800);
  }

  // Save image
  await finalImage.toFile(path.join(imageUploadPath, savedFileName));

  return savedFileName;
}

// Delete a photo
async function deleteFile(imagePath) {
  await fs.unlink(path.join(imageUploadPath, imagePath));
}

module.exports = {
  formatDateToDB,
  processAndSavePhoto,
  deleteFile
};
