/**
 * Next.js 应用根组件
 * 
 * 这个文件是Next.js应用的入口点，负责：
 * 1. 导入全局样式
 * 2. 包装所有页面组件
 * 3. 提供全局状态管理（如主题）
 * 4. 处理页面间的共同布局和功能
 */

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

// 加载Inter字体，优化性能
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 字体交换策略，提升性能
  variable: '--font-inter', // CSS变量，便于在样式中使用
});

/**
 * App组件 - Next.js应用的根组件
 * @param Component 当前路由对应的页面组件
 * @param pageProps 传递给页面组件的属性
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 字体样式应用到整个应用 */}
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      
      {/* 主题提供者，支持暗色/亮色模式切换 */}
      <ThemeProvider
        attribute="class" // 使用class属性来切换主题
        defaultTheme="system" // 默认跟随系统主题
        enableSystem={true} // 启用系统主题检测
        disableTransitionOnChange={false} // 启用主题切换时的过渡动画
      >
        {/* 应用字体类到页面组件 */}
        <div className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
} 