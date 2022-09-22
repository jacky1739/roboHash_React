declare module "*.css" { // 只要import以css為後綴的文件都會遵循以下的規定
  const css: { [key: string]: string}
  export default css
}