FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y nodejs 
RUN apt-get install -y npm
RUN npm --version
RUN node --version
WORKDIR /app
COPY . /app
#ENTRYPOINT ["node"]
CMD ["npm","start"]
EXPOSE 3000
