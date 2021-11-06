#!/bin/sh
set -ue

if [ ! -d kerla ]; then
    git clone https://github.com/nuta/kerla
fi

cd kerla
git pull

pushd Documentation
mdbook build -d ../public/docs
popd

mkdir build
touch build/kerla.initramfs
make src-docs
mv target/doc ../public/src
