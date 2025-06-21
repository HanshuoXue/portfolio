/**
 * 联系部分组件 - 占位版本
 */

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
            This section will include a contact form, social media links, and other ways to get in touch.
            The form will have validation and will be connected to a backend service for handling submissions.
          </p>
          <div className="bg-secondary-100 dark:bg-secondary-800 p-8 rounded-lg">
            <p className="text-secondary-600 dark:text-secondary-400">
              Contact form coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 