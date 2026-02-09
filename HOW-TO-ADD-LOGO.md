# 🎨 How to Add EdBell Logo

## Quick Steps

### 1. Save the Logo Image
1. Right-click on the logo image you provided
2. Save it as `edbell-logo.png`
3. Place it in the `edbell-website/public/` folder

**File path**: `edbell-website/public/edbell-logo.png`

### 2. Logo Specifications
- **Format**: PNG (with transparent background recommended)
- **Recommended size**: 400px width × auto height
- **File name**: `edbell-logo.png`

### 3. Where the Logo is Used

The logo has been integrated in:

#### Header Component (`src/components/Header.tsx`)
- Desktop navigation (top-left)
- Mobile menu panel
- Responsive sizing: 40px (mobile) to 48px (desktop) height

#### Footer Component (`src/components/Footer.tsx`)
- Company info section
- Inverted colors for dark background
- Size: 48px to 56px height

### 4. Logo Features

✅ **Responsive Design**
- Automatically scales on different screen sizes
- Maintains aspect ratio
- Smooth hover effects

✅ **Mobile Optimized**
- Touch-friendly
- Proper sizing for small screens
- Fast loading

✅ **Accessibility**
- Alt text: "EdBell EduSolutions"
- Semantic HTML

### 5. Verify Installation

After adding the logo:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Check these pages:
   - Home page header (http://localhost:3000)
   - Any page footer
   - Mobile menu (click hamburger icon)

3. Verify:
   - Logo displays correctly
   - No broken image icon
   - Responsive on mobile devices

### 6. Alternative: Use Different Logo Formats

If you want to use different formats:

**SVG Format** (Recommended for best quality):
```tsx
<img 
  src="/edbell-logo.svg" 
  alt="EdBell EduSolutions" 
  className="h-10 lg:h-12 w-auto object-contain"
/>
```

**WebP Format** (For better compression):
```tsx
<img 
  src="/edbell-logo.webp" 
  alt="EdBell EduSolutions" 
  className="h-10 lg:h-12 w-auto object-contain"
/>
```

### 7. Troubleshooting

**Logo not showing?**
- Check file name is exactly `edbell-logo.png`
- Verify file is in `public` folder (not `public/uploads` or other subfolder)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Restart development server

**Logo too large/small?**
- Adjust the `h-10 lg:h-12` classes in Header.tsx
- Adjust the `h-12 sm:h-14` classes in Footer.tsx

**Logo not visible on dark background?**
- Remove `brightness-0 invert` classes from Footer.tsx
- Or use a white version of the logo

### 8. Production Deployment

When deploying to Vercel:
1. Ensure logo is committed to Git
2. Push to GitHub
3. Vercel will automatically include it in the build

```bash
git add public/edbell-logo.png
git commit -m "Add EdBell logo"
git push origin master
```

---

## Summary

✅ Save logo as `edbell-logo.png` in `public` folder
✅ Logo automatically appears in header and footer
✅ Fully responsive and mobile-optimized
✅ Ready for production deployment

**Current Status**: Code updated, waiting for logo file to be added.

