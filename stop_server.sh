#!/bin/bash
kill $(cat server.pid)
echo "Killed server (pid:$(cat server.pid)) with $0)
rm -rf server.pid
