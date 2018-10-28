FROM karthikiyengar/node-nightwatch
WORKDIR /app/project
COPY package.json /app/project
RUN sudo npm install
COPY . /app/project
CMD ["node","index.js"]