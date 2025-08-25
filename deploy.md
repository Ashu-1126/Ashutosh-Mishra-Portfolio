# Deployment Guide - Portfolio Website

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Repository
1. Make sure all your changes are committed to GitHub
2. Ensure your repository is public (or you have a Vercel Pro account)

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your portfolio repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

### Step 3: Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🔧 Environment Variables (If Needed)
If you add any API keys or environment variables later:
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables
4. Redeploy

## 📊 Performance Monitoring
Vercel provides:
- Real-time performance metrics
- Analytics dashboard
- Function execution logs
- Edge network optimization

## 🔄 Automatic Deployments
- Every push to `main` branch triggers a new deployment
- Preview deployments for pull requests
- Automatic rollback on failed deployments

## 🎯 Best Practices
1. **Optimize Images**: Use Next.js Image component
2. **Minimize Bundle Size**: Use dynamic imports for large components
3. **Enable Caching**: Vercel handles this automatically
4. **Monitor Performance**: Use Vercel Analytics

## 🆘 Troubleshooting
- **Build Failures**: Check the build logs in Vercel dashboard
- **404 Errors**: Ensure all routes are properly configured
- **Performance Issues**: Use Vercel Analytics to identify bottlenecks

Your portfolio will be live at: `https://your-project-name.vercel.app` 