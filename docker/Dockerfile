FROM tomcat:8.5-jre8
ENV BASE_DIR /usr/local
ENV H2_HOME /usr/local/h2
ENV H2_URL http://repo2.maven.org/maven2/com/h2database/h2/1.4.195/h2-1.4.195.jar
RUN mkdir -p "$H2_HOME"
WORKDIR $BASE_DIR
ADD tomcat-users.xml $CATALINA_HOME/conf
ADD context.xml $CATALINA_HOME/webapps/manager/META-INF
ADD start_script.sh $BASE_DIR
RUN cd "$H2_HOME" && wget -c -O h2.jar "$H2_URL"
RUN chmod +x $BASE_DIR/start_script.sh
CMD ["/usr/local/start_script.sh"]

