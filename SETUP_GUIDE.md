# GalaxyCast Network - Setup and Fix Guide

## Issues Fixed

1. ✅ **Favicon 404 Error** - Added favicon link to `index.html`
   - Added: `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`
   - The favicon.ico file already exists in the `/public` directory

2. ✅ **Module Script MIME Type** - Optimized vite.config.ts
   - Simplified server configuration
   - Added HMR overlay support
   - Enabled strict: false for filesystem access
   - Ensured proper module resolution

3. ✅ **Preload Configuration** - Updated preload to use more compatible settings
   - Changed from `as="video"` to `as="fetch"` for broader browser support
   - Changed from `preload` to `prefetch` for better resource optimization

4. 🔧 **Environment Configuration** - Added .env.development file
   - Proper environment variables for development
   - Optimized port and host settings

## ⚠️ IMPORTANT: Node.js Installation Required

This project **requires Node.js 18 or higher** to run. Without Node.js, you will see these errors:
- "Failed to load module script: application/octet-stream"
- "Failed to load resource: favicon.ico 404"

## Quick Setup (Automatic)

### Option 1: Use the Setup Script (Windows)

**PowerShell (Recommended):**
1. Right-click `setup.ps1` in File Explorer
2. Click "Run with PowerShell"
3. Wait for the script to complete
4. Open a new terminal and run: `npm run dev`

**Command Prompt:**
1. In the project folder, run: `setup.bat`
2. Wait for the script to complete
3. Open a new terminal and run: `npm run dev`

### Option 2: Manual Setup

1. **Install Node.js** (if not already installed)
   - Visit https://nodejs.org/
   - Download LTS version (18.x or higher)
   - Run the installer
   - Verify: Open a NEW terminal and run `node --version`

2. **Stop any running servers**
   - Press Ctrl+C in any running terminal with the dev server
   - Or run: `taskkill /IM node.exe /F`

3. **Clean the project**
   - Delete `node_modules` folder (if exists)
   - Delete `package-lock.json` (if exists)
   - Delete `dist` folder (if exists)

4. **Reinstall dependencies**
   ```bash
   npm install
   ```

5. **Start the dev server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to: http://localhost:8080
   - Check browser console (F12) for any errors

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Check code for linting issues
npm run lint
```

## Project Structure

```
├── src/                    # Source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
│   ├── favicon.ico       # Website icon
│   ├── videos/           # Video files
│   └── robots.txt        # SEO robots file
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## Troubleshooting

### Error: "Failed to load module script: application/octet-stream"
**Cause:** Often due to:
- Node.js not being installed or in PATH
- Dev server not running
- Dependencies not installed

**Solution:**
1. Verify Node.js is installed: `node --version`
2. If not installed, visit https://nodejs.org/
3. Kill any running Vite processes
4. Run the setup script: `setup.ps1` or `setup.bat`
5. Start the dev server with a new terminal: `npm run dev`
6. Clear browser cache (Ctrl+Shift+Delete)

### Error: "favicon.ico 404"
**Cause:** 
- Dev server not running properly
- Vite not serving public files

**Solution:**
- Run setup script to reinstall everything
- Verify `public/favicon.ico` exists
- Try a different browser
- Clear browser cache

### Error: "Live reload enabled" but no page loads
**Cause:**
- Partial Vite session from before changes
- Cache issues
- Port conflict

**Solution:**
1. Close the terminal
2. Kill any Node processes: `taskkill /IM node.exe /F`
3. Open a NEW terminal
4. Run: `npm run dev`

### General debugging
1. **Clear everything and start fresh:**
   ```bash
   rmdir /s node_modules
   del package-lock.json
   npm install
   npm run dev
   ```

2. **Check for port conflicts:**
   ```bash
   netstat -ano | findstr :8080
   ```

3. **Try a different port:**
   ```bash
   PORT=3000 npm run dev
   ```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## File Changes Made

1. **index.html**
   - Added favicon link
   - Added crossorigin attribute to module script
   - Updated preload configuration

2. **vite.config.ts**
   - Optimized server configuration
   - Improved file serving
   - Added preview server config

3. **New files created**
   - `.env.development` - Environment configuration
   - `setup.ps1` - PowerShell setup script
   - `setup.bat` - Command prompt setup script
   - `SETUP_GUIDE.md` - This file

## Getting Help

If you continue to experience issues:

1. **Common Quick Fixes:**
   - Restart terminal and dev server
   - Clear browser cache
   - Try a different browser
   - Run setup script again

2. **Check logs:**
   - Look for error messages in the terminal where `npm run dev` is running
   - Check browser console (F12) for errors
   - Search for the specific error message online

3. **Verify installation:**
   ```bash
   node --version
   npm --version
   npm list
   ```

## Before Running

Make sure you have:
- ✅ Node.js 18 or higher installed
- ✅ npm installed (comes with Node.js)
- ✅ All dependencies installed (`npm install`)
- ✅ No other process running on port 8080

## Next Steps

1. Run the setup script (`setup.ps1` or `setup.bat`)
2. Open a new terminal
3. Run `npm run dev`
4. Visit http://localhost:8080
5. Start developing!
