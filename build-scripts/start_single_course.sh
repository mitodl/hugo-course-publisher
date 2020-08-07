#!/bin/bash

if [ `expr index "$1" '/'` != 1 ]
then
  CONTENT_DIR="../$1"
else
  CONTENT_DIR="$1"
fi

if [ "$CONTENT_DIR" != "" ]; then
  trap 'kill 0' EXIT
  echo $PWD
  hugo server -s site -p 3000 --bind 0.0.0.0 --theme single_course --contentDir $CONTENT_DIR &
  npm run start:multi:webpack &
  wait
else
  echo "Please provide a course ID"
fi