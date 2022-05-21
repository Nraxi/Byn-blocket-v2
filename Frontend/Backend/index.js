const bestSqlite = require('best-sqlite3');
const express = require('express');
const restApi = require('./rest-api');
const path = require('path');

const port = 5000;
const dbPath = '../database/db.sqlite3';

async function start() {
  const db = await bestSqlite.connect(dbPath);
  const app = express();
  app.use(express.json());
  restApi(app, db);
  serveDistFolder(app);
  app.listen(port, () => console.log('Backend listening on http://localhost:' + port));
}

// Serve the dist folder (the folder generated by npm run build)
function serveDistFolder(app) {
  app.use(express.static('dist'));
  // if no file found then serve index.html
  // (and let React Router do the work of routing on the frontend)
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });
}

start();