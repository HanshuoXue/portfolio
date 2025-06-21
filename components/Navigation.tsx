/**
 * 导航组件
 * 
 * 提供网站的主要导航功能，包括：
 * 1. 响应式导航菜单
 * 2. 主题切换按钮
 * 3. 平滑滚动到各个部分
 * 4. 移动端汉堡菜单
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { NAVIGATION, PERSONAL_INFO } from '@/utils/constants';

/**
 * Navigation组件 - 网站主导航
 */
export default function Navigation() {
  // 状态管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 组件挂载状态，避免主题切换时的闪烁
  useEffect(() => {
    setMounted(true);
  }, []);

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换移动菜单
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 关闭移动菜单
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 主题切换
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  // 获取主题图标
  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="w-5 h-5" />;
    
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/品牌名称 */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-bold text-secondary-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            {PERSONAL_INFO.name}
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              aria-label="Toggle theme"
              title={`Current theme: ${theme}, click to cycle`}
            >
              {getThemeIcon()}
            </button>
          </div>

          {/* 移动端菜单按钮和主题切换 */}
          <div className="md:hidden flex items-center space-x-2">
            {/* 主题切换按钮 - 移动端 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
            
            {/* 汉堡菜单按钮 */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-secondary-700 dark:text-secondary-300" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-700 dark:text-secondary-300" />
              )}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-secondary-200 dark:border-secondary-700">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors duration-200"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 