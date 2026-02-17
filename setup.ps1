# GalaxyCast Connect - Complete Setup Script (PowerShell)
# Right-click and choose "Run with PowerShell" or open PowerShell and navigate to this directory

$ErrorActionPreference = "Continue"

Write-Host "========================================"
Write-Host "GalaxyCast Connect - Complete Setup" -ForegroundColor Cyan
Write-Host "========================================"
Write-Host ""

# Step 1: Check Node.js
Write-Host "Step 1: Checking for Node.js installation..." -ForegroundColor Yellow
$NodePath = Get-Command node -ErrorAction SilentlyContinue
if (-not $NodePath) {
    Write-Host ""
    Write-Host "ERROR: Node.js is not installed or not in PATH!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Download the LTS version (18.x or higher)"
    Write-Host ""
    Write-Host "After installation:" -ForegroundColor Yellow
    Write-Host "1. Close this terminal completely"
    Write-Host "2. Open a NEW PowerShell terminal"
    Write-Host "3. Navigate to this directory again"
    Write-Host "4. Run this script again"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

$NodeVersion = & node --version
Write-Host "✓ Found Node.js: $NodeVersion" -ForegroundColor Green
Write-Host ""

# Step 2: Check npm
Write-Host "Step 2: Checking npm..." -ForegroundColor Yellow
$NpmPath = Get-Command npm -ErrorAction SilentlyContinue
if (-not $NpmPath) {
    Write-Host "ERROR: npm is not found!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

$NpmVersion = & npm --version
Write-Host "✓ Found npm: $NpmVersion" -ForegroundColor Green
Write-Host ""

# Step 3: Kill existing Node processes
Write-Host "Step 3: Stopping any running Vite dev servers..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2
Write-Host "✓ Cleaned up existing processes" -ForegroundColor Green
Write-Host ""

# Step 4: Clean old files
Write-Host "Step 4: Removing old build artifacts and dependencies..." -ForegroundColor Yellow
if (Test-Path "./node_modules") {
    Remove-Item -Path "./node_modules" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Removed node_modules" -ForegroundColor Green
}
if (Test-Path "./package-lock.json") {
    Remove-Item -Path "./package-lock.json" -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Removed package-lock.json" -ForegroundColor Green
}
if (Test-Path "./dist") {
    Remove-Item -Path "./dist" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Removed dist folder" -ForegroundColor Green
}
Write-Host ""

# Step 5: Install dependencies
Write-Host "Step 5: Installing dependencies (this may take a few minutes)..." -ForegroundColor Yellow
& npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR during npm install!" -ForegroundColor Red
    Write-Host "Exit code: $LASTEXITCODE" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
Write-Host ""

# Summary
Write-Host "========================================"
Write-Host "Setup Complete! ✓" -ForegroundColor Green
Write-Host "========================================"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Open a NEW PowerShell terminal window"
Write-Host "2. Navigate to this project folder"
Write-Host "3. Run: npm run dev"
Write-Host "4. Open http://localhost:8080 in your browser"
Write-Host ""
Write-Host "If you still see errors:" -ForegroundColor Yellow
Write-Host "- Check the console output for specific error messages"
Write-Host "- Clear your browser cache (Ctrl+Shift+Delete)"
Write-Host "- Restart the dev server"
Write-Host "- Try a different browser"
Write-Host ""
Read-Host "Press Enter to close this window"
