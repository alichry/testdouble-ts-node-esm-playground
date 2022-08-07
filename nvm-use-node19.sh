#!/bin/sh
# switch to this nightly release after installing dependencies.

set -e
. ~/.bash_profile
nvm use v19.0.0-nightly20220806760ecc9c75

node --version