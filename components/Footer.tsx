/**
 * 页脚组件
 * 
 * 提供网站底部信息，包括：
 * 1. 社交媒体链接
 * 2. 版权信息
 * 3. 快速导航链接
 * 4. 联系信息
 */

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO, NAVIGATION } from '@/utils/constants';

/**
 * Footer组件 - 网站页脚
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 社交链接图标映射
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      Github: <Github className="w-5 h-5" />,
      Linkedin: <Linkedin className="w-5 h-5" />,
      Twitter: <Twitter className="w-5 h-5" />,
      Mail: <Mail className="w-5 h-5" />,
    };
    
    return iconMap[iconName] || <div className="w-5 h-5" />;
  };

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
      <div className="container-responsive py-12">
        
        {/* 主要页脚内容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 个人信息栏 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
              {PERSONAL_INFO.title} passionate about creating beautiful, 
              functional web applications with modern technologies.
            </p>
            
            {/* 社交媒体链接 */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200 hover:scale-105"
                  aria-label={`Visit ${social.platform}`}
                >
                  {getIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="text-md font-semibold text-secondary-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-md font-semibold text-secondary-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-secondary-600 dark:text-secondary-400">
              <p>
                <Link
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {PERSONAL_INFO.contact.email}
                </Link>
              </p>
              <p>{PERSONAL_INFO.contact.location}</p>
              <p>
                <Link
                  href="/#contact"
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  Send a message →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="divider my-8"></div>

        {/* 底部版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-secondary-600 dark:text-secondary-400 text-sm">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1 text-secondary-600 dark:text-secondary-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>

        {/* 返回顶部按钮 */}
        <div className="mt-8 text-center">
          <Link
            href="#top"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
          >
            Back to top ↑
          </Link>
        </div>
        
      </div>
    </footer>
  );
} 