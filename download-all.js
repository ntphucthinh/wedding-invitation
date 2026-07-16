import fs from 'fs';
import path from 'path';
import https from 'https';

const dirs = [
  'src/assets/images',
  'src/assets/fonts',
  'src/assets/icons',
  'src/assets/audio',
  'src/components/Hero',
  'src/components/Couple',
  'src/components/Story',
  'src/components/Gallery',
  'src/components/Countdown',
  'src/components/Event',
  'src/components/RSVP',
  'src/components/Wishes',
  'src/components/Footer',
  'src/components/Popup',
  'src/styles'
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const downloads = [
  {
    url: 'https://w.ladicdn.com/689218c23c46d40012eac1e2/allura-regular-20250808042631-lxhc7.ttf',
    dest: 'src/assets/fonts/allura-regular.ttf'
  },
  {
    url: 'https://w.ladicdn.com/689218c23c46d40012eac1e2/utm-wedding-kt-20250808042631-8pvtu.ttf',
    dest: 'src/assets/fonts/utm-wedding-kt.ttf'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/beckneee-dev/mp3-hosting/Lana%20Del%20Rey%20-%20Young%20And%20Beautiful.mp3',
    dest: 'src/assets/audio/music.mp3'
  },
  {
    url: 'https://w.ladicdn.com/ladiui/icons/social/tiktok-icon.svg',
    dest: 'src/assets/icons/tiktok.svg'
  },
  {
    url: 'https://w.ladicdn.com/ladiui/icons/social/facebook.svg',
    dest: 'src/assets/icons/facebook.svg'
  },
  {
    url: 'https://w.ladicdn.com/ladiui/icons/social/zalo.svg',
    dest: 'src/assets/icons/zalo.svg'
  }
];

// Load from extracted_urls.json
const extractedUrls = JSON.parse(fs.readFileSync('extracted_urls.json', 'utf8'));

// Filter out already defined specific downloads, LadiPage system scripts, and junk
const imageAndMediaUrls = extractedUrls.filter(url => {
  if (url.includes('allura-regular') || url.includes('utm-wedding-kt') || url.includes('tiktok') || url.includes('facebook') || url.includes('zalo') || url.includes('Young%20And%20Beautiful') || url.includes('Young And Beautiful')) {
    return false;
  }
  if (url.includes('ladipagev3.min.js') || url.includes('html5shiv.min.js') || url.includes('respond.min.js') || url.includes('cdn.js')) {
    return false;
  }
  return true;
});

// Map image and other media files
imageAndMediaUrls.forEach(url => {
  let filename = path.basename(url.split('?')[0]);
  // Clean up filenames a bit if they have timestamp suffixes
  // e.g. snapedit_1754669975683-20250809035547-0jooj.jpeg -> snapedit_1754669975683.jpeg
  // but keeping it simple is also fine. Let's make names nice and clean
  let dest = '';
  if (filename.endsWith('.svg')) {
    dest = path.join('src/assets/icons', filename);
  } else {
    dest = path.join('src/assets/images', filename);
  }
  
  // Clean up some specific names for easier importing later
  if (url.includes('beige-and-brown-elegant-initials-wedding-logo')) {
    dest = 'src/assets/images/wedding-logo.png';
  } else if (url.includes('khung-1')) {
    dest = 'src/assets/images/khung-background.png';
  } else if (url.includes('logo-1')) {
    dest = 'src/assets/images/wedding-heart-logo.png';
  }
  
  downloads.push({ url, dest });
});

// Write mapping for future reference
const mapping = downloads.map(item => ({
  url: item.url,
  localPath: item.dest,
  importName: path.basename(item.dest, path.extname(item.dest))
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^([0-9])/, '_$1')
}));
fs.writeFileSync('src/assets/assets-mapping.json', JSON.stringify(mapping, null, 2));

console.log(`Prepared to download ${downloads.length} files...`);

// Helper to download in sequence or parallel
async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // Some urls might contain spaces and need encoding
    const encodedUrl = encodeURI(decodeURI(url));
    const file = fs.createWriteStream(dest);
    https.get(encodedUrl, response => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        https.get(response.headers.location, redirectResponse => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', err => {
          fs.unlink(dest, () => {});
          reject(err);
        });
      } else if (response.statusCode !== 200) {
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  let count = 0;
  for (const item of downloads) {
    try {
      console.log(`[${++count}/${downloads.length}] Downloading ${item.url} -> ${item.dest}...`);
      await downloadFile(item.url, item.dest);
    } catch (err) {
      console.error(`Error downloading ${item.url}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

run();
