#!/bin/bash
cat backend/docker/compose/export.json | jq > export.json && \
rm backend/docker/compose/export.json && \
mv export.json backend/docker/compose && \
cat backend/docker/compose/export.json