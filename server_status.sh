#!/bin/bash
if pgrep -f "python3 -m http.server 8000"; then
    echo "Server is running."
else
    echo "Server is not running."
fi
