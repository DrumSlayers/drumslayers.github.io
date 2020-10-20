const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
(async () => {
    await imagemin(['img/*.{jpg,png}'], 'build/images', {
        use: [
            imageminWebp({quality: 70})
        ]
    });
 
    console.log('Images optimized');
})();