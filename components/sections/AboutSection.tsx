/**
 * 关于部分组件 - 占位版本
 */

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
            This section will contain detailed information about my background, experience, and passion for development.
            It will be implemented with smooth animations and engaging content.
          </p>
        </div>
      </div>
    </section>
  );
} 