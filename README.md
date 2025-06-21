# Hudson Xue Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases full-stack development skills and serves as a personal portfolio to display projects, skills, and experience.

## 🌟 Features

### Core Features
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme switching with system preference detection
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Performance**: Static site generation (SSG) for fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Sections
- **Hero Section**: Personal introduction with call-to-action
- **About**: Detailed personal and professional background
- **Projects**: Featured and all projects with detailed information
- **Skills**: Technical skills organized by category with proficiency levels
- **Contact**: Contact form and social media links

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component-Based**: Modular, reusable components
- **Custom Animations**: Smooth transitions using Framer Motion
- **Form Handling**: Contact form with validation
- **Theme System**: Advanced theme switching capabilities
- **AWS Ready**: Configured for AWS deployment

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with SSG/SSR capabilities
- **React 18**: Modern React with hooks and context
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Modern icon library

### Development Tools
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS processing and optimization
- **Inter Font**: Modern, readable typography

### Deployment
- **AWS S3**: Static file hosting
- **AWS CloudFront**: Global CDN for fast content delivery
- **AWS Route 53**: Domain management and DNS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hudsonxue/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run export` - Export static files for deployment

## 📁 Project Structure

```
Portfolio/
├── components/           # React components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── ui/             # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── data/               # Static data files
│   ├── projects.ts     # Project information
│   └── skills.ts       # Skills and technologies
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # HTML document structure
│   └── index.tsx       # Home page
├── public/             # Static assets
│   ├── images/         # Image files
│   └── files/          # Documents (resume, etc.)
├── styles/             # Styling files
│   └── globals.css     # Global styles and Tailwind imports
├── types/              # TypeScript type definitions
│   └── index.ts        # Type definitions
├── utils/              # Utility functions and constants
│   └── constants.ts    # Site configuration and constants
├── aws/                # AWS deployment configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Personal Information
Update your personal information in `utils/constants.ts`:

```typescript
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  // ... other fields
};
```

### Projects
Add or modify projects in `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Project Title',
    description: 'Project description...',
    // ... other fields
  },
  // ... more projects
];
```

### Skills
Update your skills in `data/skills.ts`:

```typescript
export const skills: Skill[] = [
  {
    id: 'skill-id',
    name: 'Skill Name',
    category: 'frontend',
    level: 'advanced',
    // ... other fields
  },
  // ... more skills
];
```

### Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `styles/globals.css`
- Customize component styles using Tailwind classes

## 🚀 AWS Deployment

### Prerequisites
- AWS CLI installed and configured
- AWS account with appropriate permissions
- Domain name (optional but recommended)

### Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Create S3 bucket**
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   ```

3. **Upload files to S3**
   ```bash
   aws s3 sync out/ s3://your-portfolio-bucket-name --delete
   ```

4. **Configure S3 for static website hosting**
   ```bash
   aws s3 website s3://your-portfolio-bucket-name \
     --index-document index.html \
     --error-document 404.html
   ```

5. **Set up CloudFront distribution** (recommended)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain (optional)
   - Enable HTTPS with SSL certificate

### Environment Variables
Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=hello@yoursite.com
```

For production, set these in your deployment environment.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

This portfolio follows WCAG guidelines:
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🔧 Performance Optimization

- **Static Site Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Responsive images with next/image
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Preloaded fonts for better performance
- **CSS Optimization**: Purged unused CSS in production

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: 
  - [Naresh Khatri's Portfolio](https://www.nareshkhatri.site/) - Technical architecture and smooth interactions
  - [Zach Jordan's Portfolio](https://www.zachjordan.io/) - Personal introduction elements and layout
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://rsms.me/inter/)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

**Hudson Xue**
- Email: hello@hudsonxue.site
- Website: [www.hudsonxue.site](https://www.hudsonxue.site)
- GitHub: [@hudsonxue](https://github.com/hudsonxue)
- LinkedIn: [Hudson Xue](https://linkedin.com/in/hudsonxue)

---

**Built with ❤️ using Next.js and Tailwind CSS** 