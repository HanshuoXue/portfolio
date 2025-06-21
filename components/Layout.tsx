/**
 * 布局组件
 * 
 * 提供网站的整体布局结构，包括：
 * 1. 导航栏
 * 2. 主要内容区域
 * 3. 页脚
 * 4. 响应式设计支持
 */

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout组件 - 网站的主要布局容器
 * 
 * @param children 页面内容
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900 transition-colors duration-300">
      
      {/* 导航栏 */}
      <Navigation />
      
      {/* 主要内容区域 */}
      <div className="flex-1">
        {children}
      </div>
      
      {/* 页脚 */}
      <Footer />
      
    </div>
  );
} 