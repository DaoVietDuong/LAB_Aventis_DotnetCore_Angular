FROM node:7
RUN mkdir -p /dist

COPY ./dist/ /dist

EXPOSE 4205
# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]