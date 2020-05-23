Please check the Deno crash course by Traversymedia
https://www.youtube.com/watch?v=NHHhiqwcfRM

Deno is the buzzword of the moment, and we still don't know how it will end. 

Honestly, I am a fan of node, but I was intrigued, after following the Deno Crash Course, by Traversymedia I tried to containerize it with docker.

Warning!
this example is based on this docker image https://hub.docker.com/r/hayd/deno

Which is not an official deno repository

Github Repository: https://github.com/FrancescoXX/deno-docker

# JUST TEST
```
docker run -it --init -p 8000:8000 --init francescoxx/deno-docker:0.0.2
```

# Short version

you can just clone the repository
```
git clone https://github.com/FrancescoXX/deno-docker
```
navigate to the folder where the docker-compose.yml is located, and run
```
docker-compose up --build
```
Done!
___

# Long version

If you want to follow along, and you use Visual Studio Code, I suggest you install this extension:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2wuaa3q9h7t683gymykz.png)
___

## Step 1
Follow the traversymedia Deno Crash course
https://www.youtube.com/watch?v=NHHhiqwcfRM

___
## Step 2
then, we create a very simple Dockerfile, using the hayd/alpine-deno:1.0.0 image
```dockerfile
FROM hayd/alpine-deno:1.0.0

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .

CMD ["run", "--allow-net", "server.ts"]
```
___
## STEP 3

And last, we create a very simple docker-compose.yml file, which is no needed for now, but it could be useful in the future, for example, if we start using a database or some other services

We define port 8000 as both inner and outer one and a default network
```yaml
version: "3.7"

services:
  deno:
    image: "deno-docker:0.0.2"
    build: .
    ports:
      - "8000:8000"
    networks: 
      - deno
    
networks:
  deno: {}
```
from the folder where the docker-compose.yml file is located, we build the image:
```
docker-compose build
```

And finally, we can launch the service with this command
```
docker-compose up deno
```

visit localhost:8000 from a browser

Traversymedia Deno Crash course:

https://www.youtube.com/watch?v=NHHhiqwcfRM

Github Repository: Github Repository: https://github.com/FrancescoXX/deno-docker

Done!