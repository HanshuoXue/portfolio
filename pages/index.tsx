/**
 * 主页组件 - 简化版本用于测试
 */

import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hudson Xue Portfolio - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer passionate about creating beautiful, functional web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        {/* 简单的导航栏 */}
        <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Hudson Xue
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* 英雄区域 */}
        <main className="pt-16">
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* 头像占位 */}
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                HX
              </div>

              {/* 主要内容 */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hey, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hudson Xue
                </span>
                .
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Here, you can check out what I'm working on. I try my best to create things with{' '}
                <span className="text-red-500">❤️</span>
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                Full Stack Developer passionate about building beautiful, functional applications 
                that solve real-world problems and deliver exceptional user experiences.
              </p>

              {/* 按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>

              {/* 社交链接 */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/HanshuoXue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:hello@hudsonxue.site"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* 关于部分 */}
          <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  This is a modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. 
                  It features responsive design, dark/light theme support, and is ready for AWS deployment.
                  The project structure is modular and well-documented, making it easy to customize and extend.
                </p>
              </div>
            </div>
          </section>

          {/* 项目部分 */}
          <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* 项目卡片 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A modern e-commerce platform built with Next.js, featuring user authentication, 
                    payment processing, and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Stripe</span>
                  </div>
                </div>

                {/* 项目卡片 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Task Management App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A collaborative task management application with real-time updates, 
                    team collaboration features, and advanced project tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Socket.io</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 联系部分 */}
          <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Get In Touch
              </h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just chatting about technology.
                </p>
                <a
                  href="mailto:hello@hudsonxue.site"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Send Me An Email
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* 页脚 */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Hudson Xue. Built with ❤️ using Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
} 