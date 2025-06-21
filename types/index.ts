/**
 * 项目类型定义
 * 定义整个作品集网站中使用的数据结构和类型
 */

// 项目数据类型
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'desktop' | 'other';
  startDate: string;
  endDate?: string;
}

// 技能数据类型
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  description?: string;
}

// 经验数据类型
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract';
}

// 教育经历类型
export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

// 联系信息类型
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

// 个人信息类型
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume?: string;
  contact: ContactInfo;
}

// 博客文章类型（为未来扩展准备）
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  image?: string;
}

// 导航项类型
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

// 社交链接类型
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color?: string;
}

// 主题类型
export type Theme = 'light' | 'dark' | 'system';

// 表单数据类型
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// API响应类型
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  error?: string;
}

// 页面元数据类型
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// 动画变量类型（用于Framer Motion）
export interface AnimationVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// 响应式断点类型
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// 组件属性类型
export interface ComponentProps {
  className?: string;
  children?: any; // React.ReactNode type will be available when React is imported in components
}

// 错误类型
export interface AppError {
  message: string;
  code?: string;
  details?: Record<string, any>;
}

// 加载状态类型
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// 表单字段类型
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  options?: { label: string; value: string }[];
}

// 通知类型
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  persistent?: boolean;
} 