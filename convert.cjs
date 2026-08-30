const fs = require('fs');
const { promisify } = require('util');
const convert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('manish pic.HEIC');
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 1
    });

    fs.writeFileSync('public/profile.jpg', outputBuffer);
    console.log('Conversion successful');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
})();
