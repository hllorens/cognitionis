#!/bin/bash
if [ -f "server.pid" ] && ps -p $(cat server.pid) > /dev/null; then
    echo "Server is running with PID $(cat server.pid)."
    ps -p $(cat server.pid)
else
    echo "Server is not running."
fi