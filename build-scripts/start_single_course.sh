#!/bin/bash

if [ "$1" != "" ]; then
  trap 'kill 0' EXIT
  echo $PWD
  hugo server -s site -p 3000 --bind 0.0.0.0 --theme single_course --contentDir "../site/content/courses/$1" &
  npm run start:multi:webpack &
  wait
else
  echo "Please provide a course ID"
fi