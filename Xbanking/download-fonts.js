const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    url: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap',
    filename: 'Satoshi-Regular.woff2'
  },
  {
    url: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap',
    filename: 'Satoshi-Medium.woff2'
  },
  {
    url: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap',
    filename: 'Satoshi-Bold.woff2'
  }
];

const fontsDir = path.join(__dirname, 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

fonts.forEach(font => {
  https.get(font.url, (response) => {
    const filepath = path.join(fontsDir, font.filename);
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded ${font.filename}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${font.filename}:`, err.message);
  });
});
