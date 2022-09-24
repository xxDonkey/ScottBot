const https = require('https');
const fs = require('fs');

module.exports = (options, filename) => {
    const params = new URLSearchParams(options).toString();
    return new Promise((resolve, reject) => 
        https.get(`https://api.qrserver.com/v1/create-qr-code/?${params}`, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filename))
                    .on('error', reject)
                    .once('close', () => {
                        console.log(`[QR] QR code saved to ${filename}.`);
                        resolve(filename)
                    });
            }
            else {
                res.resume();
                reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
            }
        }));
}

