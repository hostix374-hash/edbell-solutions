# Vercel Deployment Setup

## Environment Variables Configuration

To deploy this application on Vercel, you need to configure the following environment variables in your Vercel project settings:

### Required Environment Variables

1. **MONGODB_URI**
   - Value: `mongodb+srv://sandraap745_db_user:edbell123@cluster0.8rw8g2z.mongodb.net/edbell-website?retryWrites=true&w=majority&appName=Cluster0`
   - Description: MongoDB Atlas connection string

2. **NEXTAUTH_URL**
   - Value: `https://your-vercel-domain.vercel.app` (replace with your actual Vercel domain)
   - Description: The URL of your deployed application

3. **NEXTAUTH_SECRET**
   - Value: `your-secret-key-here` (generate a secure random string)
   - Description: Secret key for NextAuth.js authentication

### Optional Environment Variables (for email functionality)

4. **SMTP_HOST**
   - Value: `smtp.gmail.com`
   - Description: SMTP server for sending emails

5. **SMTP_PORT**
   - Value: `587`
   - Description: SMTP port

6. **SMTP_USER**
   - Value: `your-email@gmail.com`
   - Description: Email address for sending notifications

7. **SMTP_PASS**
   - Value: `your-app-password`
   - Description: App password for Gmail (not your regular password)

8. **SITE_URL**
   - Value: `https://your-vercel-domain.vercel.app`
   - Description: Your site URL

9. **SITE_NAME**
   - Value: `EDBELL EDUSOLUTIONS LLP`
   - Description: Your site name

## How to Add Environment Variables in Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (EDBELL-FRONT)
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Enter the **Key** (e.g., `MONGODB_URI`)
   - Enter the **Value** (the actual value from above)
   - Select which environments to apply to (Production, Preview, Development)
5. Click **Save**
6. Redeploy your application for changes to take effect

## Redeploying After Adding Variables

After adding the environment variables:

1. Go to **Deployments** tab
2. Click on the three dots (...) next to the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

## Verifying the Deployment

Once deployed, check:
- ✅ Home page loads correctly
- ✅ About page displays properly
- ✅ Courses and Universities pages fetch data from MongoDB
- ✅ Contact form works (if SMTP is configured)
- ✅ Admin dashboard is accessible

## Troubleshooting

If you see errors:
- Check that all environment variables are correctly set
- Verify MongoDB connection string is correct
- Ensure NEXTAUTH_URL matches your Vercel domain
- Check Vercel deployment logs for specific errors

## Security Notes

- Never commit `.env.local` to Git
- Keep your MongoDB credentials secure
- Use strong, unique values for NEXTAUTH_SECRET
- For Gmail SMTP, use App Passwords, not your regular password
