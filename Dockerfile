FROM dockerfile/nodejs

RUN mkdir -p /opt/grunt
WORKDIR /opt/grunt

RUN npm install -g bower
RUN npm install -g grunt-cli

ADD package.json /opt/grunt/
RUN npm install

ADD bower.json /opt/grunt/
RUN bower --allow-root install

ADD .jshintrc /opt/grunt/
ADD Gruntfile.js /opt/grunt/

CMD grunt
