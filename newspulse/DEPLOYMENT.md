# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying Newspulse to Vercel.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Deployment Methods](#deployment-methods)
  - [Method 1: Vercel Dashboard (Recommended)](#method-1-vercel-dashboard-recommended)
  - [Method 2: Vercel CLI](#method-2-vercel-cli)
- [Project Configuration](#project-configuration)
- [Environment Variables](#environment-variables)
- [Build Settings](#build-settings)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ A Vercel account ([Sign up here](https://vercel.com/signup))
- ✅ Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- ✅ Node.js 20.x or higher installed locally (for CLI method)
- ✅ All dependencies installed (`npm install`)

---

## Deployment Methods

### Method 1: Vercel Dashboard (Recommended)

This is the easiest method for first-time deployments.

#### Step 1: Prepare Your Repository

1. Ensure all your code is committed and pushed to your Git repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

#### Step 2: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository:
   - If connecting for the first time, authorize Vercel to access your Git provider
   - Select your repository (`newspulse`)
   - Click **"Import"**

#### Step 3: Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

**Framework Preset:** `Next.js`

**Root Directory:** `newspulse` (if your project is in a subdirectory)

**Build Command:** `next build` (auto-detected)

**Output Directory:** `.next` (auto-detected)

**Install Command:** `npm install` (auto-detected)

**Node.js Version:** `20.x` (specified in package.json engines)

#### Step 4: Environment Variables

If you need to add environment variables (e.g., API keys):

1. In the project configuration screen, scroll to **"Environment Variables"**
2. Add variables as needed:
   - **Name:** `NEXT_PUBLIC_API_KEY` (or your variable name)
   - **Value:** Your API key
   - **Environment:** Select `Production`, `Preview`, and/or `Development`
3. Click **"Add"**

**Note:** Currently, Newspulse doesn't require environment variables, but you can add them here if needed later.

#### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll see:
   - ✅ Production URL (e.g., `newspulse.vercel.app`)
   - ✅ Deployment status
   - ✅ Build logs

#### Step 6: Custom Domain (Optional)

1. Go to your project dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

---

### Method 2: Vercel CLI

For developers who prefer command-line deployment.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

#### Step 3: Deploy

Navigate to your project directory:

```bash
cd newspulse
```

Deploy to production:

```bash
vercel --prod
```

Or deploy to preview:

```bash
vercel
```

#### Step 4: Follow Prompts

The CLI will ask:

- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account/team
- **Link to existing project?** → `N` (first time) or `Y` (subsequent)
- **Project name?** → `newspulse` (or press Enter for default)
- **Directory?** → `.` (current directory)
- **Override settings?** → `N` (unless you need custom settings)

#### Step 5: Verify Deployment

After deployment, you'll receive:
- Production URL
- Preview URL (if not using `--prod`)

---

## Project Configuration

### Current Configuration

Your project is configured with the following settings:

#### `package.json`

```json
{
  "engines": {
    "node": ">=20.0.0"
  },
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}
```

#### `next.config.ts`

```typescript
{
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}
```

### Vercel Build Settings

These are automatically detected, but you can verify in Vercel Dashboard:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Build Command** | `next build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x |
| **Root Directory** | `newspulse` (if in subdirectory) |

---

## Environment Variables

### Current Status

No environment variables are currently required. The project uses stub implementations for:
- News API (`lib/newsApi.ts`)
- Database (`lib/db.ts`)

### Adding Environment Variables

If you need to add environment variables later:

1. **In Vercel Dashboard:**
   - Go to **Project Settings** → **Environment Variables**
   - Add variables for Production, Preview, and/or Development
   - Redeploy after adding variables

2. **Via CLI:**
   ```bash
   vercel env add VARIABLE_NAME
   ```

3. **In Code:**
   - Use `process.env.VARIABLE_NAME` for server-side
   - Use `process.env.NEXT_PUBLIC_VARIABLE_NAME` for client-side

### Example Environment Variables

If you add a news API service later:

```
NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
DATABASE_URL=your_database_url_here
```

---

## Build Settings

### Automatic Detection

Vercel automatically detects:
- ✅ Next.js framework
- ✅ Build command (`next build`)
- ✅ Output directory (`.next`)
- ✅ Node.js version (from `engines` field)

### Manual Override (if needed)

If you need to override settings:

1. Go to **Project Settings** → **General**
2. Scroll to **Build & Development Settings**
3. Override individual settings as needed

### Build Optimization

Your `next.config.ts` includes:
- ✅ React Strict Mode (development warnings)
- ✅ SWC Minification (faster builds)
- ✅ Image optimization (AVIF/WebP formats)
- ✅ Remote image patterns configured

---

## Post-Deployment

### Verify Deployment

1. **Check Production URL:**
   - Visit your production URL (e.g., `newspulse.vercel.app`)
   - Verify all pages load correctly
   - Test navigation and functionality

2. **Check Build Logs:**
   - Go to **Deployments** tab
   - Click on your deployment
   - Review build logs for warnings or errors

3. **Test API Routes:**
   - Visit `/api/news`
   - Visit `/api/saved`
   - Verify responses

### Continuous Deployment

Vercel automatically deploys:
- ✅ **Production:** Every push to `main` branch
- ✅ **Preview:** Every push to other branches
- ✅ **Pull Requests:** Preview deployments for PRs

### Monitoring

- **Analytics:** Enable in **Project Settings** → **Analytics**
- **Logs:** View in **Deployments** → Select deployment → **Logs**
- **Performance:** Check **Speed Insights** in project dashboard

---

## Troubleshooting

### Build Failures

**Issue:** Build fails with TypeScript errors

**Solution:**
```bash
# Test build locally first
npm run build

# Fix any TypeScript errors
npm run lint
```

**Issue:** Build fails with dependency errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Issue:** 404 errors on routes

**Solution:**
- Verify `next.config.ts` is correct
- Check that API routes are in `app/api/` directory
- Ensure file structure matches Next.js App Router conventions

**Issue:** Environment variables not working

**Solution:**
- Verify variables are set in Vercel Dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding variables

**Issue:** Images not loading

**Solution:**
- Check `next.config.ts` image configuration
- Verify remote image domains are allowed
- Use Next.js `Image` component for optimization

### Performance Issues

**Issue:** Slow page loads

**Solution:**
- Enable Vercel Analytics
- Check Speed Insights
- Optimize images and assets
- Review bundle size

**Issue:** Build timeout

**Solution:**
- Check build logs for bottlenecks
- Optimize dependencies
- Consider upgrading Vercel plan if needed

### Common Commands

```bash
# Test build locally
npm run build

# Run production build locally
npm run build && npm start

# Check for linting errors
npm run lint

# View Vercel deployment logs
vercel logs

# Pull environment variables
vercel env pull .env.local
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)

---

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review Next.js documentation
3. Check Vercel status page: https://www.vercel-status.com
4. Contact Vercel support via dashboard

---

**Last Updated:** Configuration optimized for Next.js 16.1.6 and Node.js 20.x

