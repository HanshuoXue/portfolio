/**
 * 主页组件
 * 
 * 这是作品集网站的主页，包含所有主要部分：
 * 1. 英雄区域 - 个人介绍和主要信息
 * 2. 关于部分 - 详细的个人介绍
 * 3. 项目展示 - 特色项目和所有项目
 * 4. 技能展示 - 技能分类和水平
 * 5. 联系表单 - 让访问者能够联系
 */

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';

// 数据导入
import { projects, getFeaturedProjects } from '@/data/projects';
import { skills } from '@/data/skills';
import { SITE_CONFIG, PERSONAL_INFO } from '@/utils/constants';
import { Project, Skill } from '@/types';

// 动态导入组件以优化性能
const Layout = dynamic(() => import('@/components/Layout'), {
  loading: () => <div className="min-h-screen bg-white dark:bg-secondary-900" />
});

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

// 页面属性接口
interface HomePageProps {
  projects: Project[];
  featuredProjects: Project[];
  skills: Skill[];
}

/**
 * 主页组件
 * @param projects 所有项目数据
 * @param featuredProjects 特色项目数据
 * @param skills 技能数据
 */
export default function HomePage({ 
  projects, 
  featuredProjects, 
  skills 
}: HomePageProps) {
  return (
    <>
      {/* 页面头部信息 - SEO优化 */}
      <Head>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content={SITE_CONFIG.keywords.join(', ')} />
        
        {/* Open Graph 标签 - 社交媒体分享优化 */}
        <meta property="og:title" content={SITE_CONFIG.title} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.image}`} />
        <meta property="og:url" content={SITE_CONFIG.url} />
        
        {/* Twitter Card 标签 */}
        <meta name="twitter:title" content={SITE_CONFIG.title} />
        <meta name="twitter:description" content={SITE_CONFIG.description} />
        <meta name="twitter:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.image}`} />
        
        {/* 页面特定的结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              description: SITE_CONFIG.description,
              author: {
                "@type": "Person",
                name: PERSONAL_INFO.name,
                jobTitle: PERSONAL_INFO.title
              }
            })
          }}
        />
      </Head>

      {/* 布局组件包装所有内容 */}
      <Layout>
        <main className="overflow-hidden">
          {/* 英雄区域 - 首屏展示个人信息 */}
          <HeroSection />
          
          {/* 关于部分 - 详细介绍 */}
          <AboutSection />
          
          {/* 项目展示区域 */}
          <ProjectsSection 
            featuredProjects={featuredProjects} 
            allProjects={projects} 
          />
          
          {/* 技能展示区域 */}
          <SkillsSection skills={skills} />
          
          {/* 联系表单区域 */}
          <ContactSection />
        </main>
      </Layout>
    </>
  );
}

/**
 * 静态数据生成
 * 在构建时获取数据，提供更好的性能和SEO
 */
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    // 获取特色项目
    const featuredProjects = getFeaturedProjects();
    
    return {
      props: {
        projects,
        featuredProjects,
        skills,
      },
      // 重新验证时间（秒），用于增量静态再生成
      revalidate: 3600, // 1小时
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    
    // 如果数据获取失败，返回空数组以避免构建失败
    return {
      props: {
        projects: [],
        featuredProjects: [],
        skills: [],
      },
      revalidate: 60, // 更短的重新验证时间以便快速恢复
    };
  }
}; 