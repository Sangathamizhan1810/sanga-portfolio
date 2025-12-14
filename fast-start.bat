@echo off
REM Ultra Fast Start - Minimal overhead, assumes dependencies installed
title Sanga Portfolio

cd /d "%~dp0"
set FAST_REFRESH=true
set SKIP_PREFLIGHT_CHECK=true
set GENERATE_SOURCEMAP=false
set BROWSER=default

echo Starting server... Browser will open automatically when ready.
npm start

