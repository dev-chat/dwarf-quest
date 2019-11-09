#!/bin/sh
npm run build

git add dist -f && git commit -m "dist subtree commit" --no-verify

# adopted from https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b
git push origin `git subtree split --prefix dist master`:gh-pages --force