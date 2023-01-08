#!/bin/sh

npm i
cd packages/wrangler
npm run build
git config --global user.email ""
git config --global user.name "github-actions"
git config --global init.defaultBranch wrangler-build
git init
git add --all
git commit -m "build"
git remote add origin https://github.com/naturecodevoid/wrangler2.git
