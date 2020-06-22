const { series, src, dest } = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const terser = require("gulp-terser-js");
const exec = require("child_process").exec;

const clean = () => del("dist/");

const types = () => new Promise((resolve, reject) => {
  exec("./node_modules/.bin/tsc --emitDeclarationOnly", (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

const build = () => src("src/**/*.ts")
  .pipe(babel())
  .pipe(terser())
  .pipe(dest("dist/"));

exports.build = series(clean, types, build);
