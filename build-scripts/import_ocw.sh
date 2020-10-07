#!/bin/bash

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi
if [ "$OCW_TO_HUGO_INPUT" != "" ]; then
  trap 'kill 0' EXIT
  ARGS="-i $OCW_TO_HUGO_INPUT -o site/content/"
  if [ "$OCW_TO_HUGO_DOWNLOAD" = true ]; then
    ARGS="${ARGS} --download"
  fi
  if [ "$OCW_TO_HUGO_COURSES_JSON" != "" ]; then
    ARGS="${ARGS} --courses $OCW_TO_HUGO_COURSES_JSON"
  fi
  if [ "$OCW_TO_HUGO_STRIPS3" != "" ]; then
    ARGS="${ARGS} --strips3"
  fi
  if [ "$OCW_TO_HUGO_STATIC_PREFIX" != "" ]; then
    ARGS="${ARGS} --staticPrefix $OCW_TO_HUGO_STATIC_PREFIX"
  fi
  if [ "$OCW_TO_HUGO_VERBOSE" = true ]; then
    ARGS="${ARGS} --verbose"
  fi
  eval "ocw-to-hugo ${ARGS}"
  wait
else
  echo "Please provide an ocw-to-hugo input directory"
fi