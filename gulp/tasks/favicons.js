let gp = require('gulp-load-plugins')(),
    faviconsPATH = {
        "input": "./app/static/images/favicon/*.{jpg,jpeg,png,gif,tiff,svg}",
        "ouput": "./build/static/images/favicon/"
    };

module.exports = function () {
    $.gulp.task('favicons', () => {
        return $.gulp.src(faviconsPATH.input)
            .pipe(gp.favicons({
                icons: {
                    appleIcon: true,
                    favicons: true,
                    online: false,
                    appleStartup: false,
                    android: false,
                    firefox: false,
                    yandex: false,
                    windows: false,
                    coast: false
                }
            }))
            .pipe($.gulp.dest(faviconsPATH.ouput));
    });
};