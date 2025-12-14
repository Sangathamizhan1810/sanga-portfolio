@echo off
echo Installing dependencies for Sanga Portfolio React App...
call npm install
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Dependencies installed successfully!
    echo You can now run the app using: npm start
    echo Or double-click run.bat
) else (
    echo.
    echo ERROR: Failed to install dependencies
    pause
)




