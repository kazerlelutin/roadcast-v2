#!/bin/bash

# PostgreSQL
#pg_ctl -D ./data start

# backend
cd back
nohup air > back.log 2>&1 &

cd ..
# frontend
cd front
nohup bun run build > frontend.log 2>&1 &
cd ..

# server (Caddy)
nohup caddy run > caddy.log 2>&1 &
