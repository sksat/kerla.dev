#!/bin/sh
set -ue

if [ ! -d kerla ]; then
    git clone https://github.com/nuta/kerla
fi

cd kerla
git pull

pushd Documentation
mdbook build -d ../../public/docs
popd
