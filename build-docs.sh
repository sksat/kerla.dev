#!/bin/sh
set -ue

if [ ! -d kerla ]; then
    git clone https://github.com/nuta/kerla
fi

cd kerla
git pull
make docs

#XXX: dirty hack
touch build/kerla.initramfs 
make src-docs
mv target/doc ../public/src
mv build/docs ../public/docs
