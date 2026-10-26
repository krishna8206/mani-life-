const https = require('https');

https.get('https://manilifestyle.com/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgMatches = [...data.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
    const headingMatches = [...data.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log('--- IMAGES ---');
    console.log([...new Set(imgMatches)]);
    console.log('--- HEADINGS ---');
    console.log([...new Set(headingMatches)]);
  });
});
