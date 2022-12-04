#!/bin/bash
cat ../backend/docker/compose/create-ln-app-0/export.json | jq >> export.json && mv export.json ../backend/docker/compose/create-ln-app-0 