#!/bin/sh
npm run build

git add dist -f && git commit -m "dist subtree commit" --no-verify

git subtree push --prefix dist origin gh-pages