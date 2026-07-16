import fs from 'fs';

const html = fs.readFileSync('wedding.html', 'utf8');

// Regex to find urls
const urlRegex = /https?:\/\/[^\s"'()<>]+?\.(?:png|jpe?g|gif|webp|svg|mp3|ttf|woff2?|css|js)/gi;
const matches = html.match(urlRegex) || [];

const uniqueUrls = [...new Set(matches)];
console.log(`Found ${uniqueUrls.length} unique assets:`);
console.log(uniqueUrls);

fs.writeFileSync('extracted_urls.json', JSON.stringify(uniqueUrls, null, 2));
