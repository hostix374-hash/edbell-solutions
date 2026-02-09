# Vercel Deployment Guide - EDBELL EDUSOLUTIONS

## 🚀 Quick Deployment Steps

### Step 1: Environment Variables Setup

Go to your Vercel project settings and add these environment variables:

#### Required Variables

```env
# MongoDB Connection (REQUIRED)
MONGODB_URI=mongodb+srv://sandraap745_db_user:edbell123@cluster0.8rw8g2z.mongodb.net/edbell-website?retryWrites=true&w=majority&appName=Cluster0

# Next.js Configuration (REQUIRED)
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret-key-here

# Site Configuration (REQUIRED)
SITE_URL=https://your-domain.vercel.app
SITE_NAME=EDBELL EDUSOLUTIONS LLP
```

#### Optional Variables (for email features)

```env
# Email Configuration (OPTIONAL - for contact form notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 📋 Detailed Setup Instructions

### 1. Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Navigate to your project: `sandra11223/EDBELL-FRONT`
3. Click on **Settings** tab

### 2. Add Environment Variables

1. In Settings, click on **Environment Variables**
2. Add each variable one by one:

#### MONGODB_URI
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://sandraap745_db_user:edbell123@cluster0.8rw8g2z.mongodb.net/edbell-website?retryWrites=true&w=majority&appName=Cluster0`
- **Environment**: Production, Preview, Development (select all)

#### NEXTAUTH_URL
- **Key**: `NEXTAUTH_URL`
- **Value**: `https://your-actual-domain.vercel.app` (replace with your actual Vercel URL)
- **Environment**: Production, Preview, Development

#### NEXTAUTH_SECRET
- **Key**: `NEXTAUTH_SECRET`
- **Value**: Generate a secure secret (use: `openssl rand -base64 32`)
- **Environment**: Production, Preview, Development

#### SITE_URL
- **Key**: `SITE_URL`
- **Value**: `https://your-actual-domain.vercel.app`
- **Environment**: Production, Preview, Development

#### SITE_NAME
- **Key**: `SITE_NAME`
- **Value**: `EDBELL EDUSOLUTIONS LLP`
- **Environment**: Production, Preview, Development

### 3. Generate NEXTAUTH_SECRET

Run this command locally to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this Node.js command:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and use it as your `NEXTAUTH_SECRET` value.

---

## 🔧 Build Configuration

### Vercel Build Settings

Your `vercel.json` should have:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Next.js Configuration

Your `next.config.ts` is already configured with:

```typescript
{
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
}
```

---

## 🐛 Troubleshooting Build Errors

### Error: "Creating an optimized production build ... error"

**Possible Causes:**

1. **Missing Environment Variables**
   - Solution: Add all required environment variables in Vercel dashboard

2. **MongoDB Connection Issue**
   - Solution: Verify MONGODB_URI is correct and accessible from Vercel

3. **Build Timeout**
   - Solution: Vercel free tier has 45-second build limit
   - Check if build completes locally: `npm run build`

4. **Memory Issues**
   - Solution: Optimize images and reduce bundle size

### Common Fixes

#### Fix 1: Clear Build Cache
1. Go to Vercel Dashboard
2. Settings → General
3. Scroll to "Build & Development Settings"
4. Click "Clear Build Cache"
5. Redeploy

#### Fix 2: Check Build Logs
1. Go to Deployments tab
2. Click on the failed deployment
3. View full build logs
4. Look for specific error messages

#### Fix 3: Verify Environment Variables
```bash
# In Vercel Dashboard, verify all these are set:
✓ MONGODB_URI
✓ NEXTAUTH_URL
✓ NEXTAUTH_SECRET
✓ SITE_URL
✓ SITE_NAME
```

#### Fix 4: Test Build Locally
```bash
# Run these commands locally:
npm install
npm run build
npm run start

# If successful, the issue is with Vercel configuration
```

---

## 📊 Deployment Checklist

### Pre-Deployment
- [x] Code pushed to GitHub
- [ ] Environment variables added to Vercel
- [ ] NEXTAUTH_SECRET generated
- [ ] Domain URL updated in env vars
- [ ] MongoDB accessible from Vercel IPs

### Post-Deployment
- [ ] Website loads successfully
- [ ] Database connection works
- [ ] Contact form submits
- [ ] Newsletter subscription works
- [ ] Admin dashboard accessible
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Analytics tracking

---

## 🌐 Custom Domain Setup (Optional)

### Add Custom Domain

1. Go to Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `edbelledusolutions.com`)
4. Follow DNS configuration instructions
5. Update environment variables:
   - `NEXTAUTH_URL=https://edbelledusolutions.com`
   - `SITE_URL=https://edbelledusolutions.com`

### DNS Configuration

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔒 Security Best Practices

### 1. Secure Environment Variables
- Never commit `.env.local` to Git
- Use different secrets for production
- Rotate secrets regularly

### 2. MongoDB Security
- Use IP whitelist (add Vercel IPs)
- Use strong database password
- Enable MongoDB Atlas monitoring

### 3. API Security
- Implement rate limiting
- Add CORS configuration
- Validate all inputs

---

## 📈 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Compress images before upload
- Use WebP format

### 2. Code Splitting
- Already configured with Next.js
- Dynamic imports for heavy components

### 3. Caching
- Static pages cached automatically
- API routes use appropriate cache headers

---

## 🆘 Getting Help

### If Build Fails

1. **Check Build Logs**
   - Vercel Dashboard → Deployments → Failed Build → View Logs

2. **Common Error Messages**

   **Error: "Cannot find module"**
   - Solution: Run `npm install` and commit `package-lock.json`

   **Error: "MongoDB connection failed"**
   - Solution: Check MONGODB_URI and whitelist Vercel IPs

   **Error: "Build exceeded maximum duration"**
   - Solution: Optimize build process or upgrade Vercel plan

3. **Contact Support**
   - Vercel Support: support@vercel.com
   - MongoDB Support: support.mongodb.com

---

## 🎯 Quick Fix Commands

### Redeploy from CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Force Rebuild

```bash
# In your project directory
git commit --allow-empty -m "Force rebuild"
git push frontend master
```

---

## ✅ Verification Steps

After successful deployment:

1. **Test Homepage**
   - Visit: `https://your-domain.vercel.app`
   - Check: Hero section loads
   - Check: Images display

2. **Test Database Connection**
   - Visit: `/courses`
   - Check: Courses load from database
   - Visit: `/universities`
   - Check: Universities load

3. **Test Forms**
   - Visit: `/contact`
   - Submit: Test contact form
   - Check: Success message appears

4. **Test Admin**
   - Visit: `/login`
   - Login: Use credentials
   - Check: Dashboard loads
   - Check: Analytics show data

5. **Test Mobile**
   - Open: Chrome DevTools
   - Toggle: Device toolbar
   - Check: Responsive layout
   - Check: Touch interactions

---

## 📞 Support Information

### Project Details
- **Repository**: sandra11223/EDBELL-FRONT
- **Framework**: Next.js 16.1.6
- **Database**: MongoDB Atlas
- **Hosting**: Vercel

### Useful Links
- **GitHub Repo**: https://github.com/sandra11223/EDBELL-FRONT
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com

---

## 🎉 Success Indicators

Your deployment is successful when:

✅ Build completes without errors
✅ Website loads at Vercel URL
✅ All pages accessible
✅ Database queries work
✅ Forms submit successfully
✅ Images display correctly
✅ Mobile responsive
✅ No console errors

---

**Last Updated**: February 9, 2026
**Status**: Ready for Deployment
**Version**: 1.0.0
