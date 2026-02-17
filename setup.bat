@echo off
REM This script will completely clean and reinstall the GalaxyCast project

echo ========================================
echo GalaxyCast Connect - Complete Setup
echo ========================================
echo.

echo Step 1: Checking for Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Node.js is not installed or not in PATH!
    echo.
    echo Please install Node.js from https://nodejs.org/
    echo Download the LTS version (18.x or higher)
    echo.
    echo After installation:
    echo 1. Close this terminal completely
    echo 2. Open a NEW terminal
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Found Node.js: %NODE_VERSION%
echo.

echo Step 2: Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not found!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ Found npm: %NPM_VERSION%
echo.

echo Step 3: Killing any existing Vite processes...
taskkill /IM node.exe /F 2>nul
timeout /t 2 >nul
echo ✓ Cleaned up existing processes
echo.

echo Step 4: Removing old node_modules and lock files...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✓ Removed node_modules
)
if exist package-lock.json (
    del /q package-lock.json
    echo ✓ Removed package-lock.json
)
if exist dist (
    rmdir /s /q dist
    echo ✓ Removed dist folder
)
echo.

echo Step 5: Installing dependencies (this may take a few minutes)...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR during npm install!
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Open a NEW terminal window
echo 2. Run: npm run dev
echo 3. Open http://localhost:8080 in your browser
echo.
echo If you still see errors:
echo - Check the console for specific errors
echo - Try clearing browser cache (Ctrl+Shift+Delete)
echo - Restart the dev server
echo.
pause
