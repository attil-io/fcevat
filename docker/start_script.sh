#!/bin/sh

/usr/local/tomcat/bin/catalina.sh run &
java -cp /usr/local/h2/h2.jar  org.h2.tools.Server -tcp -tcpAllowOthers -tcpPort 9092 

