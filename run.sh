#!/bin/bash

echo "========================================"
echo "  Sanga Portfolio - React App"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "Checking for dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies"
        exit 1
    fi
    echo "Dependencies installed successfully!"
    echo ""
else
    echo "Dependencies already installed."
    echo ""
fi

echo "Starting React development server..."
echo "The app will open automatically in your browser at http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""
npm start




