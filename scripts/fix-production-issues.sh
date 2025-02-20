#!/bin/bash

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf .next
npm run clean

# Install dependencies
echo "Installing dependencies..."
npm install

# Run linting
echo "Running linter..."
npm run lint

# Build the application
echo "Building for production..."
npm run build

# Test the production build
echo "Testing production build..."
npm run start
