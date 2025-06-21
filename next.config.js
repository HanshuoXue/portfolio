/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，用于AWS S3部署
  output: 'export',
  
  // 禁用图片优化，因为静态导出不支持
  images: {
    unoptimized: true
  },
  
  // 生产环境下的优化配置
  compiler: {
    // 生产环境移除console.log
    removeConsole: process.env.NODE_ENV === 'production'
  },
  
  // 启用严格模式
  reactStrictMode: true,
  
  // 启用SWC压缩
  swcMinify: true,
  
  // 基础路径配置（如果使用子路径部署）
  // basePath: '',
  
  // 资源前缀（用于CDN）
  // assetPrefix: '',
  
  // 页面扩展名
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
  // 环境变量配置
  env: {
    SITE_NAME: 'Hudson Xue Portfolio',
    SITE_URL: 'https://www.hudsonxue.site'
  }
}

module.exports = nextConfig 