import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import neatgrid from "postcss-neat";
import nestedcss from "postcss-nested";
import colorfunctions from "postcss-colour-functions";
import hdBackgrounds from "postcss-at2x";
import cssextend from "postcss-simple-extend";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

const browserSync = BrowserSync.create();
const hugoBin = "hugo";
const defaultArgs = ["-d", "dist", "-s", ".", "-v"];

gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, ["--buildDrafts", "--buildFuture"]));

gulp.task("build", ["css", "js", "videos", "images", "hugo"]);
gulp.task("build-preview", ["css", "js", "videos", "images", "hugo-preview"]);

gulp.task("css", () => (
  gulp.src("./static/**/*.css")
    .pipe(postcss([
      cssImport({from: "./static/css/main.css"}),
      neatgrid(),
      colorfunctions(),
      nestedcss(),
      hdBackgrounds(),
      cssextend()]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
    
));

gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });

  gulp.src(["./static/js/**/*", "!./static/js/app.js", "!./static/js/cms.js", "!./static/js/cms/**/*"])
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream())
});

gulp.task("videos", () => (
  gulp.src("./static/videos/**/*")
    .pipe(gulp.dest("./dist/videos"))
    .pipe(browserSync.stream())
));

gulp.task("images", () => (
  gulp.src("./static/img/**/*")
    .pipe(gulp.dest("./dist/img"))
    .pipe(browserSync.stream())
));

gulp.task("server", ["hugo", "css", "js", "videos", "images"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false
  });
  gulp.watch("./static/js/**/*.js", ["js"]);
  gulp.watch("./static/js/*.js", ["js"]);
  gulp.watch("./static/css/**/*.css", ["css"]);
  gulp.watch("./static/img/**/*", ["images"]);
  gulp.watch("./static/videos/**/*", ["videos"]);
  gulp.watch("./layouts/**/*", ["hugo"]);
  gulp.watch("./content/**/*", ["hugo"]);
});

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}