#!/bin/sh

cd packages/wrangler
cp ../../.gitignore .
npm i
npm run build
git config --global user.email ""
git config --global user.name "github-actions"
git init
git add --all
git commit -m "build"
git branch -M wrangler-build
git remote add origin https://github.com/naturecodevoid/wrangler2.git
git push -f -u origin wrangler-build
