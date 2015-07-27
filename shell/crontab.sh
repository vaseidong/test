#!/bin/bash
#Author:yangxd
#echo "请输入要查看日志的月份！"
#read Month
#echo "请输入要查看哪一天的日志！"
#read Day
totNum=$(cat /var/log/nginx/union.500.acces.log | grep '15\/Jul' | awk '{print NR}'| tail -1)
cat /var/log/nginx/union.500.acces.log | grep 404 | awk '{print $1"\t"$4"\t"$7"\t"$9"\t"$11"\n"}'>/home/yangxd/sh/log.bak
#cat /home/yangxd/sh/log.bak | awk '/"$(Day)"\/"$(Month)"/ {print $1"\t"$2"\t"$3"\t"$4"\t"$5}'>/home/yangxd/sh/log2.bak
awk '/15\/Jul/ {print $1"\t"$3}' /home/yangxd/sh/log.bak>/home/yangxd/sh/log2.bak
sort /home/yangxd/sh/log2.bak | uniq -c | sort -nr > /home/yangxd/sh/log3.bak
errNum=$(awk '{print NR}' /home/yangxd/sh/log2.bak | tail -1)
echo "今天被访问了$totNum次
今天404次数为:$errNum次
下面是同一个IP访问同一个资源出现404错误的统计结果:"
cat /home/yangxd/sh/log3.bak