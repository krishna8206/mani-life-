const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  'assets/images/home_banner_1.png',
  'assets/images/banner2.jpg',
  'assets/images/banner3.jpg',
  'assets/images/product-category.jpg',
  'assets/images/service1.jpg',
  'assets/images/service2.jpg',
  'assets/images/service3.jpg',
  'assets/images/service4.jpg',
];

const destDir = path.join(__dirname, '../public/images/mani-raw');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

files.forEach(file => {
  const url = `https://manilifestyle.com/${file}`;
  const filename = path.basename(file);
  const dest = path.join(destDir, filename);
  https.get(url, res => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => console.log('Downloaded:', filename));
    } else {
      console.log('Failed:', filename, res.statusCode);
    }
  }).on('error', err => console.log('Error:', filename, err.message));
});
