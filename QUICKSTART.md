# Quick Start Guide - GalaxyCast Connect

## 🚀 Get Running in 5 Minutes

### Step 1: Install Node.js (If Not Already Installed)

1. Visit: https://nodejs.org/
2. Download **LTS version** (18.x or higher)
3. Run the installer
4. **Restart your computer** (important!)
5. Verify in a new terminal:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Run the Setup Script

**Option A: PowerShell (Recommended for Windows)**
- Right-click the file `setup.ps1` in File Explorer
- Select "Run with PowerShell"
- Wait for completion
- Script will tell you what to do next

**Option B: Command Prompt**
- Double-click `setup.bat`
- Wait for completion
- Follow on-screen instructions

### Step 3: Start the Development Server

In a **NEW terminal window**, run:
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:    http://localhost:8080/
  ➜  press h to show help
```

### Step 4: Open in Browser

Click or navigate to:
```
http://localhost:8080
```

---

## ✅ What Should You See?

When working correctly:
- [ ] Browser loads the GalaxyCast website
- [ ] Favicon appears in browser tab
- [ ] No red errors in browser console (F12)
- [ ] Live reload works (page updates when you save files)

---

## ❓ Still Having Issues?

### Terminal says "command not found: node"
→ Node.js isn't installed. See Step 1 above.

### Port 8080 is already in use
→ Run in terminal:
```bash
taskkill /IM node.exe /F
npm run dev
```

### Browser still shows errors
→ Try:
1. Close all browser tabs with localhost:8080
2. Clear browser cache (Ctrl+Shift+Delete)
3. Stop dev server (Ctrl+C in terminal)
4. Run setup script again
5. Start dev server again: `npm run dev`

### Nothing works
→ Run complete cleanup:
```bash
# Kill existing processes
taskkill /IM node.exe /F

# Delete old files
rmdir /s node_modules
del package-lock.json

# Clean reinstall
npm install
npm run dev
```

---

## 📚 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Check code for errors
npm run lint
```

---

## 🔗 Useful Links

- Project folder: `f:\REPOs\galaxycast-connect-main`
- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Node.js: https://nodejs.org

---

## 📞 Need More Help?

See the full guides:
- **SETUP_GUIDE.md** - Detailed setup and troubleshooting
- **FIX_REPORT.md** - Technical details of what was fixed

---

**You're all set! Happy coding! 🎉**
