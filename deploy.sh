#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'griftland-informatica-lesmateriaal.thijsdh.nl' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:thijsdh/griftland-informatica-lesmateriaal.git master:gh-pages

cd -