# 🎯 HO5 Task - E-commerce Website Challenge

Welcome to the HO5 Task! This is a hands-on challenge designed to help junior developers understand Next.js fundamentals, including app routing, slug-based routing, and frontend development best practices.

## ⚠️ Important: Watch This First!

Before starting the project, please watch the [Next.js Crash Course Video](https://www.youtube.com/watch?v=O8ivm7403rk&ab_channel=NovaDesigns) to understand the basics. This will help you:
- Understand Next.js fundamentals
- Learn about app routing
- Get familiar with the project structure
- Note: You can skip from 12:00 if you're not familiar with backend concepts

## 🎯 Project Overview

This is a learning challenge where you'll build a modern e-commerce website using Next.js. The project focuses on:
- Next.js app routing and slug-based routing
- Frontend development skills
- Clean code practices
- Figma design implementation
- Cloudinary integration for static assets (Bonus Points! 🎁)
- Using Next.js Image component for optimized images (Required)

## 🎨 Design Resources

- [Figma Design Link](https://www.figma.com/design/HMV1UsaDXHQCVSrVSTV9H6/E-commerce-Website-Template--Freebie---Community-?node-id=0-1&m=dev&t=GxdTwlZvw5kBzT12-1)
- Design includes both mobile and desktop layouts
- Two main pages to implement:
  - Home page
  - Product detail page

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- Package manager (npm or Yarn - Yarn usage gets bonus points! 🎁)
- Git
- A code editor (VS Code recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayussh-2/h05-task.git
cd h05-task
```

2. Install dependencies:
```bash
# Using npm
npm install

# OR using Yarn (Bonus Points! 🎁)
yarn install
```

3. Start the development server:
```bash
# Using npm
npm run dev

# OR using Yarn (Bonus Points! 🎁)
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Learning Resources

- [Next.js Official Documentation](https://nextjs.org/)
- [Next.js Images and Fonts Documentation](https://nextjs.org/docs/app/getting-started/images-and-fonts)
- [Next.js Crash Course Video](https://www.youtube.com/watch?v=O8ivm7403rk&ab_channel=NovaDesigns)
  - Note: You can skip from 12:00 if you're not familiar with backend concepts

## 📁 Project Structure

- Use Cloudinary for image optimization (Bonus Points! 🎁)
- Follow Next.js 14+ app directory structure
- Use Next.js Image component for all images (Required)

## 🏗️ Code Organization & DRY Principles

### Component Organization
- Create reusable components in `components/` directory
- Break down large components into smaller, focused ones
- Group related components in subdirectories (e.g., `components/ui/`, `components/layout/`)
- Use atomic design principles where applicable

### Code Reusability
- Extract common logic into custom hooks in `hooks/` directory
- Create utility functions in `utils/` directory
- Implement shared styles in `styles/` directory

### Best Practices
- Keep components small and focused on a single responsibility
- Implement proper prop typing for all components
- Create shared constants in `/config/constants/[page-name]/index.js` directory
- Use proper naming conventions for files and components

### Directory Structure
```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable components
│   ├── ui/            # Basic UI components
│   ├── layout/        # Layout components
│   └── features/      # Feature-specific components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── styles/            # Shared styles
└── config/constants/          # Configuration files and constants
```

## 📝 Commit Guidelines

### Conventional Commit Types
Use the following prefixes in your commit messages to maintain a clear and meaningful commit history:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semi colons, etc)
- `refactor:` - Code changes that neither fix bugs nor add features
- `perf:` - Performance improvements
- `test:` - Adding or modifying tests
- `chore:` - Changes to build process, tools, or dependencies
- `ci:` - Changes to CI configuration files and scripts

### Examples
```bash
git commit -m "feat: add product search functionality"
git commit -m "fix: resolve image loading issue on mobile"
git commit -m "docs: update README with new setup instructions"
git commit -m "style: format code according to style guide"
git commit -m "refactor: simplify product card component"
git commit -m "chore: update dependencies to latest versions"
```

## 🤝 Contributing

### How to Submit Your Work

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-name
```

3. Make your changes and commit them:
```bash
git add .
git commit -m "Add your feature"
```

4. Push to your fork:
```bash
git push origin feature/your-name
```

5. Create a Pull Request:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR description with:
     - What you've implemented
     - Screenshots of your work
     - Any challenges faced
     - What you learned

### PR Review Criteria

Your PR will be evaluated based on:
- Code quality and cleanliness
- Implementation of the design
- Responsive design implementation
- Performance optimization
- Best practices followed
- Use of Next.js Image component (Required)
- Use of Yarn (Bonus Points! 🎁)
- Implementation of Cloudinary (Bonus Points! 🎁)

## 🎯 Project Goals

- Learn Next.js fundamentals
- Understand modern frontend development
- Practice implementing designs from Figma
- Learn about image optimization with Next.js Image component
- Learn about image optimization with Cloudinary (Bonus Points! 🎁)
- Develop clean code habits

## 📝 Notes

- Make sure to test your implementation on both mobile and desktop
- Follow the design specifications closely
- Use semantic HTML and proper accessibility practices
- Use Next.js Image component for all images (Required)
- Consider using Yarn for package management (Bonus Points! 🎁)
- Consider using Cloudinary for image optimization (Bonus Points! 🎁)

## 🆘 Need Help?

- Check the Next.js documentation
- Review the provided video tutorial
- Ping Me!
- Look for similar issues on stackoverflow!
Remeber: The more you make bugs the more you learn!

Happy Coding! 🚀 
