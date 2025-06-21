/**
 * 项目数据配置
 * 包含作品集网站中展示的所有项目信息
 * 这些是示例项目，你可以替换为自己的实际项目
 */

import { Project } from '@/types';

export const projects: Project[] = [
  // 特色项目 - 这些会在首页突出显示
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    longDescription: `
      A comprehensive e-commerce solution that provides a seamless shopping experience for users and powerful management tools for administrators.
      
      Key Features:
      - User authentication and profile management
      - Product catalog with search and filtering
      - Shopping cart and checkout process
      - Payment integration with Stripe
      - Order tracking and history
      - Admin dashboard for inventory management
      - Responsive design for all devices
      - SEO optimization
      
      This project showcases full-stack development skills, including frontend user interface design, backend API development, database management, and third-party service integration.
    `,
    image: '/images/projects/ecommerce-platform.jpg', // 需要添加项目截图
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'AWS S3',
      'Vercel'
    ],
    githubUrl: 'https://github.com/hudsonxue/ecommerce-platform', // 替换为实际链接
    liveUrl: 'https://ecommerce-demo.hudsonxue.site', // 替换为实际链接
    featured: true,
    status: 'completed',
    category: 'web',
    startDate: '2023-08-01',
    endDate: '2023-10-15',
  },
  
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.',
    longDescription: `
      A powerful task management application designed for teams and individuals to organize projects, track progress, and collaborate effectively.
      
      Key Features:
      - Real-time collaboration with Socket.io
      - Kanban board interface
      - Team and project management
      - File attachments and comments
      - Advanced filtering and search
      - Time tracking and reporting
      - Mobile-responsive design
      - Dark/light theme support
      
      This project demonstrates expertise in real-time web applications, complex state management, and user experience design.
    `,
    image: '/images/projects/task-management.jpg', // 需要添加项目截图
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Material-UI',
      'Node.js',
      'Socket.io',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Cloudinary',
      'Heroku'
    ],
    githubUrl: 'https://github.com/hudsonxue/task-manager',
    liveUrl: 'https://taskflow.hudsonxue.site',
    featured: true,
    status: 'completed',
    category: 'web',
    startDate: '2023-05-01',
    endDate: '2023-07-30',
  },
  
  // 占位项目 - 这些是预留的位置，可以后续替换
  {
    id: 'placeholder-project-1',
    title: 'Coming Soon - Project #3',
    description: 'An exciting new project is in development. This space is reserved for showcasing upcoming work.',
    longDescription: `
      This is a placeholder for a future project. The space is intentionally left available for when new work is completed and ready to be showcased.
      
      Planned Features:
      - To be determined based on project requirements
      - Modern tech stack implementation
      - Best practices and clean code
      - Comprehensive documentation
      - Full testing coverage
      
      Stay tuned for updates on this exciting new development!
    `,
    image: '/images/projects/placeholder-1.jpg', // 占位图片
    technologies: ['TBD'], // To Be Determined
    featured: false,
    status: 'planned',
    category: 'web',
    startDate: '2024-01-01',
  },
  
  {
    id: 'placeholder-project-2',
    title: 'Coming Soon - Project #4',
    description: 'Another innovative project in the pipeline. This slot is reserved for future development work.',
    longDescription: `
      This is another placeholder for upcoming project work. The flexibility of this design allows for easy addition of new projects as they are completed.
      
      Potential Areas of Focus:
      - Mobile application development
      - AI/ML integration projects
      - Advanced data visualization
      - IoT or embedded systems
      - Open source contributions
      
      The specific direction will depend on interests and opportunities that arise.
    `,
    image: '/images/projects/placeholder-2.jpg', // 占位图片
    technologies: ['TBD'], // To Be Determined
    featured: false,
    status: 'planned',
    category: 'web',
    startDate: '2024-03-01',
  },
  
  // 其他项目 - 展示更多技能和经验
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'This very website! A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    longDescription: `
      A personal portfolio website designed to showcase projects, skills, and experience in an elegant and professional manner.
      
      Key Features:
      - Modern, responsive design
      - Dark/light theme support
      - Smooth animations and transitions
      - SEO optimization
      - Performance optimization
      - Accessible design (WCAG compliant)
      - Static site generation for fast loading
      - AWS deployment with CloudFront CDN
      
      This project itself demonstrates frontend development skills, design sensibility, and attention to detail.
    `,
    image: '/images/projects/portfolio-website.jpg',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'AWS S3',
      'CloudFront',
      'Route 53'
    ],
    githubUrl: 'https://github.com/hudsonxue/portfolio',
    liveUrl: 'https://www.hudsonxue.site',
    featured: false,
    status: 'completed',
    category: 'web',
    startDate: '2023-11-01',
    endDate: '2023-11-15',
  },
  
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    longDescription: `
      A comprehensive weather application that provides detailed weather information with an intuitive and visually appealing interface.
      
      Key Features:
      - Current weather conditions
      - 7-day forecast
      - Hourly weather data
      - Interactive weather maps
      - Location search and geolocation
      - Weather alerts and notifications
      - Historical weather data
      - Responsive design
      
      This project showcases API integration skills, data visualization, and creating engaging user interfaces.
    `,
    image: '/images/projects/weather-app.jpg',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'OpenWeather API',
      'Mapbox',
      'Chart.js',
      'PWA',
      'Netlify'
    ],
    githubUrl: 'https://github.com/hudsonxue/weather-dashboard',
    liveUrl: 'https://weather.hudsonxue.site',
    featured: false,
    status: 'completed',
    category: 'web',
    startDate: '2023-03-01',
    endDate: '2023-04-15',
  },
];

// 根据不同条件过滤项目的辅助函数
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// 获取所有使用的技术标签
export const getAllTechnologies = (): string[] => {
  const allTechs: string[] = [];
  projects.forEach(project => {
    allTechs.push(...project.technologies);
  });
  return Array.from(new Set(allTechs)).sort();
};

// 获取项目统计信息
export const getProjectStats = () => {
  const completed = projects.filter(p => p.status === 'completed').length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;
  const planned = projects.filter(p => p.status === 'planned').length;
  const featured = projects.filter(p => p.featured).length;
  
  return {
    total: projects.length,
    completed,
    inProgress,
    planned,
    featured,
  };
}; 