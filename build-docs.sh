#!/bin/sh
set -ue

if [ ! -d kerla ]; then
    git clone https://github.com/nuta/kerla
fi

cd kerla
git pull

mdbook build -d ../public/docs