#!/bin/bash -e

cd dist
git init

git config user.name "Holman Gao"
git config user.email "holman@golmansax.com"

git add .
git commit -m 'Deploy to Github Pages'
git push --force --quiet "https://${GH_TOKEN}@github.com/golmansax/golmansax.github.io.git" master

# git rm CNAME
# git commit -m 'Remove CNAME'
# git push --force --quiet "https://${GH_TOKEN}@github.com/golmansax/personal-site.git" master:gh-pages
