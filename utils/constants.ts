/**
 * 网站常量配置
 * 包含网站的基础信息、导航配置、社交链接等常量数据
 */

import { NavigationItem, SocialLink, PersonalInfo } from '@/types';

// 网站基础信息
export const SITE_CONFIG = {
  name: 'Hudson Xue Portfolio',
  title: 'Hudson Xue - Full Stack Developer',
  description: 'Full Stack Developer passionate about creating beautiful, functional web applications with modern technologies.',
  url: 'https://www.hudsonxue.site',
  author: 'Hudson Xue',
  keywords: [
    'Hudson Xue',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'AWS',
    'Portfolio',
    'Web Developer',
    'Frontend',
    'Backend'
  ],
  language: 'en',
  locale: 'en-US',
  image: '/images/og-image.jpg', // Open Graph 图片
  favicon: '/favicon.ico',
} as const;

// 导航菜单配置
export const NAVIGATION: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'Skills',
    href: '/#skills',
  },
  {
    label: 'Experience',
    href: '/#experience',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

// 社交媒体链接配置
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/hudsonxue', // 替换为实际的GitHub链接
    icon: 'Github',
    color: '#181717',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/hudsonxue', // 替换为实际的LinkedIn链接
    icon: 'Linkedin',
    color: '#0A66C2',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/hudsonxue', // 替换为实际的Twitter链接
    icon: 'Twitter',
    color: '#1DA1F2',
  },
  {
    platform: 'Email',
    url: 'mailto:hello@hudsonxue.site', // 替换为实际的邮箱
    icon: 'Mail',
    color: '#EA4335',
  },
];

// 个人信息配置
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Hudson Xue',
  title: 'Full Stack Developer',
  bio: `Hey, I'm Hudson Xue. Here, you can check out what I'm working on. 
        I try my best to create things with ❤️. 
        I'm passionate about building beautiful, functional applications 
        that solve real-world problems and deliver exceptional user experiences.`,
  avatar: '/images/avatar.jpg', // 需要添加头像图片
  resume: '/files/Hudson_Xue_Resume.pdf', // 需要添加简历文件
  contact: {
    email: 'hello@hudsonxue.site',
    phone: '+1 (555) 123-4567', // 可选，替换为实际电话
    location: 'San Francisco, CA',
    website: 'https://www.hudsonxue.site',
    github: 'https://github.com/hudsonxue',
    linkedin: 'https://linkedin.com/in/hudsonxue',
    twitter: 'https://twitter.com/hudsonxue',
  },
};

// 技能分类配置
export const SKILL_CATEGORIES = {
  frontend: {
    label: 'Frontend',
    icon: 'Monitor',
    description: 'User interface and experience technologies',
  },
  backend: {
    label: 'Backend',
    icon: 'Server',
    description: 'Server-side development and APIs',
  },
  database: {
    label: 'Database',
    icon: 'Database',
    description: 'Data storage and management systems',
  },
  devops: {
    label: 'DevOps & Cloud',
    icon: 'Cloud',
    description: 'Deployment, infrastructure, and cloud services',
  },
  tools: {
    label: 'Tools & Others',
    icon: 'Wrench',
    description: 'Development tools and productivity software',
  },
  languages: {
    label: 'Languages',
    icon: 'Code',
    description: 'Programming and markup languages',
  },
} as const;

// 项目状态配置
export const PROJECT_STATUS = {
  completed: {
    label: 'Completed',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  planned: {
    label: 'Planned',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
} as const;

// 响应式断点配置
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// 动画配置
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
  stagger: {
    children: 0.1,
    items: 0.05,
  },
} as const;

// 表单验证规则
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  name: {
    minLength: 2,
    maxLength: 50,
    message: 'Name must be between 2 and 50 characters',
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters',
  },
} as const;

// AWS配置（用于部署）
export const AWS_CONFIG = {
  region: 'us-east-1', // 可根据需要调整
  s3Bucket: 'hudson-portfolio-website',
  cloudFrontDomain: 'www.hudsonxue.site',
  certificateArn: '', // SSL证书ARN，部署时需要配置
} as const;

// 环境变量默认值
export const ENV_DEFAULTS = {
  NODE_ENV: 'development',
  SITE_URL: 'http://localhost:3000',
  CONTACT_EMAIL: 'hello@hudsonxue.site',
} as const;

// 错误消息配置
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: 'Please check your input and try again.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  serverError: 'Server error. Please try again later.',
} as const;

// 成功消息配置
export const SUCCESS_MESSAGES = {
  contactForm: 'Thank you for your message! I\'ll get back to you soon.',
  subscribe: 'Successfully subscribed to the newsletter!',
  copy: 'Copied to clipboard!',
} as const; 