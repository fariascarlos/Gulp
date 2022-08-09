const gulp = require ('gulp')
const concat = require ('gulp-concat')
const cssmin = require ('gulp-cssmin')
const rename = require ('gulp-rename')
const uglify = require ('gulp-uglify')
const image = require ('gulp-imagemin')
const htmlmin = require ('gulp-htmlmin')
const { series, parallel } = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload









function tarefasCSS(callback){

  return   gulp.src([
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

function tarefasJS(callback){
    gulp.src([
        './vendor/**/*.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
        './vendor/Owl/dist/owl.carousel.js',
        './vendor/jquery-mask/jquery.mask.js',
      // './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
        
    ])

    .pipe(babel({
        comments: false,
        presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))

    return callback()

}

function tarefasImagem(){
 return    gulp.src('./src/imagens/*')
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

// POC - proof of Concept

function tarefasHTML(callback){

    gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))

    .pipe(gulp.dest('./dist'))

    return callback()

}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change',reload)
    gulp.watch('./dist/**/*').on('change',reload)


})

function end(cb){

    console.log('tarefas comcluidas')

    return cb()

    


}



const process = series(tarefasHTML,tarefasCSS,end )



exports.html = tarefasHTML
exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem

exports.default = process
