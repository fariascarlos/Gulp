const gulp = require ('gulp')
const concat = require ('gulp-concat')
const cssmin = require ('gulp-cssmin')
const rename = require ('gulp-rename')
const uglify = require ('gulp-uglify')
const image = require ('gulp-imagemin')






function tarefasCSS(cb){

    return gulp.src([
        './vendor/**/*.css',
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './src/css/style.css'


])
    .pipe(concat('styles.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'})) // libs.min.css
    .pipe(gulp.dest('./dist/css'))

}

function tarefasJS(){
    return gulp.src([
        './vendor/**/*.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
        './src/js/custom.js'
        
    ])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
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
