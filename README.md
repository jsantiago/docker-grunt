To build:

    docker build -rm -t docker-grunt .

To run:

    docker run -p 8080:8080 -v $PWD/src:/opt/grunt/src -i -t docker-grunt


This will run the default [Grunt][2] task and serve the result from a [Docker][1] container.

[1]: https://www.docker.io/
[2]: http://gruntjs.com/
