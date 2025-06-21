/**
 * 技能数据配置
 * 包含个人技术技能的详细信息
 * 按照不同类别组织，便于在技能部分展示
 */

import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend 技能
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    icon: 'react', // 将使用相应的图标组件
    description: 'Building interactive user interfaces with hooks, context, and modern React patterns'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: 'nextjs',
    description: 'Full-stack React framework with SSR, SSG, and API routes'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: 'typescript',
    description: 'Type-safe JavaScript development with advanced type system features'
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'advanced',
    icon: 'tailwindcss',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    level: 'expert',
    icon: 'html5',
    description: 'Semantic markup, accessibility, and modern web standards'
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    level: 'advanced',
    icon: 'css3',
    description: 'Modern CSS with Grid, Flexbox, animations, and responsive design'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 'expert',
    icon: 'javascript',
    description: 'ES6+, DOM manipulation, async programming, and modern JS patterns'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    level: 'intermediate',
    icon: 'vue',
    description: 'Progressive framework for building user interfaces with composition API'
  },

  // Backend 技能
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: 'nodejs',
    description: 'Server-side JavaScript with Express, middleware, and REST APIs'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'advanced',
    icon: 'express',
    description: 'Web application framework with routing, middleware, and API development'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
    icon: 'python',
    description: 'Backend development with Django, Flask, and data processing'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'backend',
    level: 'intermediate',
    icon: 'java',
    description: 'Enterprise application development with Spring Boot'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    level: 'intermediate',
    icon: 'graphql',
    description: 'Query language for APIs with Apollo Server and client'
  },

  // Database 技能
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'advanced',
    icon: 'postgresql',
    description: 'Relational database design, complex queries, and performance optimization'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'intermediate',
    icon: 'mongodb',
    description: 'NoSQL database with Mongoose ODM and aggregation pipelines'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'intermediate',
    icon: 'redis',
    description: 'In-memory data structure store for caching and session management'
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'database',
    level: 'advanced',
    icon: 'prisma',
    description: 'Next-generation ORM with type-safe database access'
  },

  // DevOps & Cloud 技能
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 'advanced',
    icon: 'aws',
    description: 'Cloud services including EC2, S3, Lambda, RDS, and CloudFront'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
    icon: 'docker',
    description: 'Containerization for development and deployment environments'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    level: 'beginner',
    icon: 'kubernetes',
    description: 'Container orchestration and cluster management'
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'devops',
    level: 'intermediate',
    icon: 'terraform',
    description: 'Infrastructure as Code for cloud resource management'
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'devops',
    level: 'intermediate',
    icon: 'github',
    description: 'CI/CD pipelines and automated workflows'
  },

  // Tools & Others 技能
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'advanced',
    icon: 'git',
    description: 'Version control with branching strategies and collaborative workflows'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    level: 'expert',
    icon: 'vscode',
    description: 'Advanced editor usage with extensions and productivity features'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    level: 'intermediate',
    icon: 'figma',
    description: 'UI/UX design and prototyping for web and mobile applications'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 'advanced',
    icon: 'postman',
    description: 'API development, testing, and documentation'
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tools',
    level: 'intermediate',
    icon: 'jest',
    description: 'JavaScript testing framework with mocking and coverage'
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'tools',
    level: 'intermediate',
    icon: 'cypress',
    description: 'End-to-end testing for web applications'
  }
];

// 根据类别获取技能的辅助函数
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

// 根据熟练程度获取技能
export const getSkillsByLevel = (level: Skill['level']): Skill[] => {
  return skills.filter(skill => skill.level === level);
};

// 获取特定技能
export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(skill => skill.id === id);
};

// 获取所有技能类别
export const getSkillCategories = (): Skill['category'][] => {
  const categories = skills.map(skill => skill.category);
  return Array.from(new Set(categories));
};

// 获取技能统计信息
export const getSkillStats = () => {
  const expert = skills.filter(s => s.level === 'expert').length;
  const advanced = skills.filter(s => s.level === 'advanced').length;
  const intermediate = skills.filter(s => s.level === 'intermediate').length;
  const beginner = skills.filter(s => s.level === 'beginner').length;
  
  return {
    total: skills.length,
    expert,
    advanced,
    intermediate,
    beginner,
  };
};

// 技能熟练程度映射
export const skillLevelConfig = {
  expert: {
    label: 'Expert',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    percentage: 95,
  },
  advanced: {
    label: 'Advanced',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    percentage: 80,
  },
  intermediate: {
    label: 'Intermediate',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    percentage: 60,
  },
  beginner: {
    label: 'Beginner',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    percentage: 40,
  },
} as const; 