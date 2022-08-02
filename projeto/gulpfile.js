const gulp = require ('gulp')
const concat = require ('gulp-concat')
const cssmin = require ('gulp-cssmin')
const rename = require ('gulp-rename')
const uglify = require ('gulp-uglify')
const image = require ('gulp-imagemin')






function tarefasCSS(cb){

    return gulp.src('./vendor/**/*.css')
    .pipe(concat('libs.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'})) // libs.min.css
    .pipe(gulp.dest('./dist/css'))

}

function tarefasJS(){
    return gulp.src('./vendor/**/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.js'}))
    .pipe(gulp.dest('./dist/js'))

}

function tarefasImagem(){
    return gulp.src('./src/imagens/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        svgo: true,
        concurrent: 10,
        quiet: true

    }))

    .pipe(gulp.dest('./dist/imagens'))
}






exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
