/**
 * 项目部分组件 - 占位版本
 */

import React from 'react';

interface ProjectsSectionProps {
  featuredProjects: any[];
  allProjects: any[];
}

export default function ProjectsSection({ featuredProjects, allProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900 dark:text-white">
          My Projects
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
            This section will showcase featured projects with interactive cards, technology tags, and links to live demos and source code.
            Currently displaying {featuredProjects.length} featured projects and {allProjects.length} total projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div key={project.id || index} className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 