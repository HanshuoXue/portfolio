/**
 * Next.js 文档组件
 * 
 * 这个文件用于自定义HTML文档的结构，包括：
 * 1. HTML头部的元数据
 * 2. 字体预加载
 * 3. 第三方脚本
 * 4. SEO优化标签
 */

import { Html, Head, Main, NextScript } from 'next/document';
import { SITE_CONFIG } from '@/utils/constants';

/**
 * Document组件 - 自定义HTML文档结构
 * 只在服务端渲染时执行，不会在客户端重新渲染
 */
export default function Document() {
  return (
    <Html lang={SITE_CONFIG.language} className="scroll-smooth">
      <Head>
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 主题颜色配置 */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        
        {/* 字体预加载 - 提升性能 */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS预获取 - 优化第三方资源加载 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* 页面元数据 */}
        <meta name="author" content={SITE_CONFIG.author} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph 元数据 - 社交媒体分享优化 */}
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={SITE_CONFIG.locale} />
        
        {/* Twitter Card 元数据 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@hudsonxue" />
        
        {/* Structured Data - 帮助搜索引擎理解网站内容 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hudson Xue",
              url: SITE_CONFIG.url,
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/hudsonxue",
                "https://linkedin.com/in/hudsonxue",
                "https://twitter.com/hudsonxue"
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "AWS",
                "Full Stack Development"
              ]
            })
          }}
        />
      </Head>
      
      <body className="antialiased">
        {/* 主要内容区域 */}
        <Main />
        
        {/* Next.js脚本 */}
        <NextScript />
        
        {/* 主题切换脚本 - 防止闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
} 