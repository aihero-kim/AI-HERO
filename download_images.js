
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    {
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        dest: 'd:\\05 AI HERO\\ai-hero---ta\'lim-biznesi\\public\\sherzod_sodiqov.png'
    }
];

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        // Ensure directory exists
        const dirname = path.dirname(dest);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            // Handle redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Downloaded ${dest}`);
                    resolve();
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            console.error(`Error downloading ${url}: ${err.message}`);
            reject(err);
        });
    });
};

Promise.all(images.map(img => downloadImage(img.url, img.dest)))
    .then(() => console.log('All downloads finished'))
    .catch(err => console.error('Download failed', err));
