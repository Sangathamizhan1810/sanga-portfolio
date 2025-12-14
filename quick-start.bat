@echo off
REM Quick Start - Optimized for fast loading
title Sanga Portfolio - Quick Start

REM Set environment variables for faster React start
set FAST_REFRESH=true
set SKIP_PREFLIGHT_CHECK=true
set GENERATE_SOURCEMAP=false
set NODE_ENV=development

REM Change to project directory
cd /d "%~dp0"

REM Quick check if node_modules exists (skip if not - will fail fast)
if not exist "node_modules" (
    echo Installing dependencies (first time only)...
    call npm install --silent
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Start React dev server - browser will open automatically when ready
echo Starting development server...
echo Browser will open automatically when server is ready...
echo.
call npm start

