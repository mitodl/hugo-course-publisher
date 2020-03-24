#!/bin/bash

git submodule update --init --recursive
npm install --prefix pdfjs
mkdir -p site/static/pdfjs
cd pdfjs
gulp generic
cd ../
cp -R pdfjs/build/generic/* site/static/pdfjs