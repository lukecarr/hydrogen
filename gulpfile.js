const { series, src, dest } = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const terser = require("gulp-terser-js");

const clean = () => del("dist/");

const build = () => src("src/**/*.ts")
  .pipe(babel())
  .pipe(terser())
  .pipe(dest("dist/"));

exports.clean = clean;
exports.build = series(clean, build);
