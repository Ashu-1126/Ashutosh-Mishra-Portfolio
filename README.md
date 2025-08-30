# 🚀 Ashutosh Mishra - Portfolio Website

A cutting-edge, interactive portfolio website built with the latest web technologies and advanced UI/UX principles. This portfolio showcases not just technical skills, but demonstrates mastery of modern web development practices.

## ✨ Features

### 🎨 **Advanced UI/UX Components**
- **3D Particle Background** - Interactive Three.js particle system
- **Floating Navigation** - Glassmorphism navigation with smooth animations
- **Enhanced Theme Toggle** - Light/Dark/System theme with smooth transitions
- **Loading Screen** - Stunning animated loading experience
- **Glassmorphism Effects** - Modern backdrop blur and transparency

### 🎭 **Animation & Motion**
- **Framer Motion 3D** - Advanced 3D animations and effects
- **GSAP Animations** - Professional-grade timeline animations
- **Scroll-Triggered Animations** - Intersection Observer based reveals
- **3D Transform Effects** - Hover animations with perspective
- **Parallax Scrolling** - Smooth scroll-based animations

### 🎯 **Interactive Elements**
- **Advanced Hero Section** - Typewriter effects, floating icons, 3D transforms
- **Interactive Skills Cards** - Hover effects, progress bars, modal details
- **Project Showcase** - Category filtering, interactive cards, smooth transitions
- **Contact Form** - Form validation, loading states, success feedback
- **Responsive Design** - Mobile-first approach with touch interactions

### 🌟 **Visual Effects**
- **Gradient Text** - Animated gradient text effects
- **Glow Effects** - Dynamic lighting and shadow effects
- **Shimmer Animations** - Loading and hover shimmer effects
- **Custom Scrollbars** - Styled scrollbars for better UX
- **Selection Styling** - Custom text selection colors

## 🛠️ **Technologies Used**

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React features and hooks
- **TypeScript** - Type-safe development

### **Animation Libraries**
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional animation toolkit
- **Three.js + React Three Fiber** - 3D graphics and effects

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled components
- **Lucide React** - Beautiful icon library
- **Custom CSS Animations** - Advanced keyframe animations

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Class Variance Authority** - Component variant management

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### **Environment Setup**
The project uses environment variables for configuration. Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 **Responsive Design**

- **Mobile First** - Optimized for mobile devices
- **Tablet Optimized** - Responsive breakpoints for tablets
- **Desktop Enhanced** - Advanced features for larger screens
- **Touch Friendly** - Optimized touch interactions

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Green (#10B981)
- **Neutral**: Gray scale with transparency

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive**: Fluid typography scaling

### **Spacing & Layout**
- **Grid System**: CSS Grid with Flexbox
- **Spacing Scale**: Tailwind's 4px base scale
- **Container**: Max-width 7xl with responsive padding

## 🔧 **Customization**

### **Adding New Sections**
1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Update navigation if needed

### **Modifying Animations**
- Edit GSAP animations in component `useEffect` hooks
- Modify Framer Motion variants and transitions
- Update CSS keyframes in `globals.css`

### **Theme Customization**
- Modify color variables in `tailwind.config.js`
- Update CSS custom properties in `globals.css`
- Customize theme toggle logic in `EnhancedThemeToggle.tsx`

## 📊 **Performance Optimizations**

- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Intersection Observer for components
- **CSS Optimization** - Purged unused styles
- **Bundle Analysis** - Webpack bundle analyzer

## 🌐 **Deployment**

### **Vercel (Recommended)**
```bash
npm run build
vercel --prod
```

### **Other Platforms**
- **Netlify**: `npm run build && netlify deploy`
- **AWS S3**: Upload build folder to S3 bucket
- **Docker**: Use provided Dockerfile

## 📈 **Analytics & SEO**

- **Meta Tags** - Dynamic meta information
- **Open Graph** - Social media optimization
- **Structured Data** - Rich snippets for search engines
- **Performance Monitoring** - Core Web Vitals tracking

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Framer Motion** team for amazing animation library
- **GSAP** team for professional animation toolkit
- **Tailwind CSS** team for utility-first CSS framework
- **Three.js** community for 3D graphics library

## 📞 **Contact**

- **Portfolio**: [Your Portfolio URL]
- **Email**: ashutosh.mishra@example.com
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

**Built with ❤️ using Next.js, React, and modern web technologies** 
