FROM node:latest
WORKDIR /usr/app
COPY . .
EXPOSE 8081
RUN npm install
ENV PORT 8081
ENV STATIC static
CMD ["node", "server.js"]