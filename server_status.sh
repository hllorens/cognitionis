#!/bin/bash
if [ -f "server.pid" ] && ps -p $(cat server.pid) > /dev/null; then
    echo "Server is running with PID $(cat server.pid)."
    ps -p $(cat server.pid)
else
    if pgrep -f "python3 -m http.server 8000"; then
        echo "($pwd)/server.pid is not running but a python http.server is running at port 8000."
    else
        echo "ERROR: Server is not running."
    fi
fi
