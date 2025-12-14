@echo off
REM Optimized Fast Start
title Sanga Portfolio

cd /d "%~dp0"
set FAST_REFRESH=true
set SKIP_PREFLIGHT_CHECK=true
set GENERATE_SOURCEMAP=false
set BROWSER=default

echo Starting server... Browser will open automatically when ready.
call npm start



