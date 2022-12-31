FROM node:16
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY --chown=node:node ./
EXPOSE 9000
CMD ["npm","start"]