#!/bin/sh
set -ue

curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh  -s -- -y --default-toolchain nightly 
curl -L https://github.com/rust-lang/mdBook/releases/download/v0.4.13/mdbook-v0.4.13-x86_64-unknown-linux-gnu.tar.gz | tar zxf - -C /usr/bin
yarn install