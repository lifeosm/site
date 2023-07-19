#!/usr/bin/env sh

export PATH="/app/tools/node_modules/.bin:${PATH}"

if [ $# -eq 0 ]; then
  /bin/sh
  exit $?
fi

"${@}"
