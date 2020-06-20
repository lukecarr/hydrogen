const { series, src, dest } = require("gulp");
const del = require("del");
const babel = require("gulp-babel");

const clean = () => del("dist/");

const build = () => src("src/**/*.ts").pipe(babel()).pipe(dest("dist/"));

exports.clean = clean;
exports.build = series(clean, build);
