/**
 * 英雄部分组件
 * 
 * 网站的首屏部分，包含：
 * 1. 个人头像和介绍
 * 2. 主要标题和副标题
 * 3. 行动按钮
 * 4. 社交媒体链接
 * 参考 Zach Jordan 的个人介绍元素和布局
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants';

/**
 * HeroSection组件 - 网站首屏英雄区域
 */
export default function HeroSection() {
  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // 社交图标映射
  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      Github: <Github className="w-5 h-5" />,
      Linkedin: <Linkedin className="w-5 h-5" />,
      Mail: <Mail className="w-5 h-5" />,
      Twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>,
    };
    
    return iconMap[iconName] || <div className="w-5 h-5" />;
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-secondary-50 to-primary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* 左侧：文本内容 */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-6">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Hey, I'm{' '}
              <span className="gradient-text">
                {PERSONAL_INFO.name}
              </span>
              .
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Here, you can check out what I'm working on. I try my best to create things with{' '}
              <span className="text-red-500">❤️</span>
            </motion.p>

            <motion.p 
              className="text-lg text-secondary-600 dark:text-secondary-400 mb-10 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* 行动按钮 */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <Link
                href="/#projects"
                className="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-200"
              >
                View My Work
              </Link>
              
              <Link
                href="/#contact"
                className="btn-outline px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-200"
              >
                Get In Touch
              </Link>

              {PERSONAL_INFO.resume && (
                <Link
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-4 text-lg font-semibold inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </Link>
              )}
            </motion.div>

            {/* 社交媒体链接 */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-secondary-800 border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label={`Visit ${social.platform}`}
                >
                  {getSocialIcon(social.icon)}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* 右侧：头像和装饰 */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* 头像背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-3xl opacity-20 scale-110"></div>
              
              {/* 头像容器 */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white dark:border-secondary-800 shadow-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20">
                
                {/* 占位头像 - 实际使用时替换为真实头像 */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500 text-white text-6xl md:text-8xl font-bold">
                  {PERSONAL_INFO.name.split(' ').map(name => name[0]).join('')}
                </div>
                
                {/* 如果有头像图片，使用以下代码替换上面的占位内容 */}
                {/* 
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>

              {/* 装饰环 */}
              <div className="absolute -inset-4 border-2 border-primary-200 dark:border-primary-800 rounded-full animate-pulse-slow opacity-30"></div>
              <div className="absolute -inset-8 border border-accent-200 dark:border-accent-800 rounded-full animate-pulse-slow opacity-20" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </div>
        </motion.div>

        {/* 向下滚动指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link
            href="/#about"
            className="flex flex-col items-center text-secondary-500 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 group"
          >
            <span className="text-sm font-medium mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400">
              Scroll to explore
            </span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 