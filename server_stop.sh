#!/bin/bash
if [ -f "server.pid" ]; then
    pid=$(cat server.pid)
    if ps -p $pid > /dev/null; then
        kill $pid
        echo "Killed server (pid:$pid) with $0)"
        rm -rf server.pid
    else
        echo "ERROR: Process with pid $pid not found."
        rm -rf server.pid
    fi
else
    echo "ERROR: server.pid not found."
fi