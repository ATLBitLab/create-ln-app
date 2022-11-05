#!/bin/bash


PORT=3000
PORT_OPEN=

while [ -z $PORT_OPEN ]
do
  IS_PORT_OPEN=$(lsof -i tcp:$PORT | sed 's/ /-/g' | awk -F "-" '{print $2}' | tr -d '\n')
  if [[ -z $IS_PORT_OPEN ]]; then
    echo "Port Open: $PORT"
    cd frontend
    PORT=$PORT npm watch:frontend
    PORT_OPEN=1
  else
    echo "Port $PORT Taken"
    PORT=$((PORT+1))
  fi
done

