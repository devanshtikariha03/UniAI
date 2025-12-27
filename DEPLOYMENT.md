# Deploying UniAI to Render

This guide will help you deploy your UniAI website to Render.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. A Render account (sign up at https://render.com)

## Step 1: Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Create a New Web Service on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** button
3. Select **"Web Service"**
4. Connect your GitHub account if you haven't already
5. Select your repository

## Step 3: Configure the Service

Use these settings:

- **Name**: `uniai` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose the closest region to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (or `.` if needed)
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

## Step 4: Environment Variables

Currently, no environment variables are required. If you add any later (like API keys), you can add them in the Render dashboard under **Environment**.

## Step 5: Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Build your Next.js application
   - Start the service

## Step 6: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain name
4. Follow the DNS configuration instructions

## Important Notes

- **Free Tier**: Render's free tier spins down after 15 minutes of inactivity. For production, consider the paid plans.
- **Build Time**: First build may take 5-10 minutes
- **Auto-Deploy**: Render automatically deploys when you push to your main branch
- **Logs**: Check the "Logs" tab in Render dashboard for build/deployment issues

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Render uses Node 18+ by default)

### Application Crashes
- Check runtime logs
- Verify `startCommand` is correct: `npm start`
- Ensure port is correctly configured (Render automatically sets PORT env var)

### Environment Variables
- Add any required env vars in Render dashboard
- Restart the service after adding new variables

## Alternative: Using render.yaml

If you prefer infrastructure-as-code, you can use the included `render.yaml` file:

1. Make sure `render.yaml` is in your repository root
2. In Render dashboard, select **"New Blueprint"**
3. Connect your repository
4. Render will automatically detect and use `render.yaml`

## Post-Deployment

After successful deployment:

1. Your site will be available at `https://uniai.onrender.com` (or your custom domain)
2. Set up automatic deployments from your main branch
3. Monitor your service in the Render dashboard
4. Consider setting up monitoring and alerts

## Cost

- **Free Tier**: $0/month (with limitations)
- **Starter Plan**: $7/month (recommended for production)
- **Standard Plan**: $25/month (for higher traffic)

For more information, visit: https://render.com/docs

