//导入path库
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  baseUrl: BASE_URL,
  //eslint
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  //打包时不生成.map文件
  productionSourceMap: false
  //处理跨域跳转
  // devServer:{
  //   proxy:'http://localhost:4000'
  // }
};
