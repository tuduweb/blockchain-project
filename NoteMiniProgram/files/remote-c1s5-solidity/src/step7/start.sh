#!/bin/bash
nohup ganache-cli > log.out 2>&1 &
sleep 8

pid=$(netstat -anp |grep 8545 | awk  '{print $7}' | awk -F/ '{print $1}')

if [ -z "${pid}" ]; then
	echo "ganache-cli启动失败"
	echo "日志如下："
	cat ./log.out
else
	cd /data/workspace/myshixun/src/step1
	truffle migrate
	truffle test ./test/SimpleStorageTest.js > out.txt
    python3 ./start.py
fi