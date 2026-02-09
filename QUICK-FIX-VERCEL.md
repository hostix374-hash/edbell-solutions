# 🚨 Quick Fix for Vercel Build Error

## Problem
Your Vercel build is failing at "Creating an optimized production build"

## Solution
Add environment variables to Vercel

---

## Step-by-Step Fix (5 minutes)

### Step 1: Go to Vercel Dashboard
1. Open: https://vercel.com/dashboard
2. Find your project: `EDBELL-FRONT`
3. Click on the project

### Step 2: Open Settings
1. Click **Settings** tab (top menu)
2. Click **Environment Variables** (left sidebar)

### Step 3: Add Variables (Copy & Paste)

Click "Add New" for each variable:

#### Variable 1: MONGODB_URI
```
Key: MONGODB_URI
Value: mongodb+srv://sandraap745_db_user:edbell123@cluster0.8rw8g2z.mongodb.net/edbell-website?retryWrites=true&w=majority&appName=Cluster0
Environment: Production, Preview, Development (select all 3)
```

#### Variable 2: NEXTAUTH_URL
```
Key: NEXTAUTH_URL
Value: https://your-project-name.vercel.app
Environment: Production, Preview, Development (select all 3)
```
⚠️ Replace `your-project-name` with your actual Vercel project URL

#### Variable 3: NEXTAUTH_SECRET
```
Key: NEXTAUTH_SECRET
Value: fzQDNTwTd2eYLb2VyOSt4RnDiIPftKlDPcLbFNgVW7Y=
Environment: Production, Preview, Development (select all 3)
```

#### Variable 4: SITE_URL
```
Key: SITE_URL
Value: https://your-project-name.vercel.app
Environment: Production, Preview, Development (select all 3)
```
⚠️ Replace `your-project-name` with your actual Vercel project URL

#### Variable 5: SITE_NAME
```
Key: SITE_NAME
Value: EDBELL EDUSOLUTIONS LLP
Environment: Production, Preview, Development (select all 3)
```

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Find the failed deployment
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**
5. Wait 2-3 minutes for build to complete

---

## ✅ Success Checklist

After redeployment, verify:
- [ ] Build completes successfully
- [ ] Website loads at Vercel URL
- [ ] No error messages in build log
- [ ] Homepage displays correctly
- [ ] Images load properly

---

## 🆘 Still Having Issues?

### Check Build Logs
1. Go to Deployments tab
2. Click on the deployment
3. Scroll through logs for error messages

### Common Issues

**Issue**: "MongoDB connection failed"
**Fix**: Verify MONGODB_URI is copied correctly (no extra spaces)

**Issue**: "Build timeout"
**Fix**: This is normal for first deployment, try redeploying

**Issue**: "Module not found"
**Fix**: Clear build cache in Settings → General → Clear Build Cache

---

## 📞 Need Help?

If you're still stuck:
1. Check the full guide: `VERCEL-DEPLOYMENT-GUIDE.md`
2. Share the build log error message
3. Verify all 5 environment variables are added

---

**Quick Reference**

Your Vercel Project: https://vercel.com/dashboard
Your GitHub Repo: https://github.com/sandra11223/EDBELL-FRONT

**Generated Secret**: `fzQDNTwTd2eYLb2VyOSt4RnDiIPftKlDPcLbFNgVW7Y=`
