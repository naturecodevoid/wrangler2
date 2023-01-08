#!/bin/sh

cd packages/wrangler
cp ../../.gitignore .
npm i
npm run build
git init
git add --all
git commit -m "build"
git branch -M wrangler-build
git remote add origin https://github.com/naturecodevoid/wrangler2.git
git push -u origin wrangler-build
