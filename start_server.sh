#!/bin/bash
nohup python3 -m http.server 8000 > server.log 2>&1 & echo $! > server.pid
