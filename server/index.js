const http = require('http');
const { html } = require('../app/lib/Admin');
const client = require('../lib/be-client');
const express = require('express');
const async = require('async');
const fs = require('fs');
const path = require('path');
const replaceStream = require('replacestream');

const app = express();

// app bundle
app.use('/app', express.static(path.resolve('./app')));

app.get('/', (req, res, next) => {
  const { project, company, skill } = client;
  // get all companies + skills + projects
  async.parallel([
    (callback) => {
      project
        .get()
        .end((err, res) => {
          debugger;
        });
    },
    (callback) => {
      company
        .get()
        .end(callback);
    },
    (callback) => {
      skill
        .get()
        .end(callback);
    },
  ], (err, results) => {
    debugger;
    if (err) return next(err);
    res.setHeader('Content-Type', 'text/html');
    const applicationHtml = html({
      projects: results[0],
      companies: results[1],
      skills: results[2],
    });
    const adminHtml = fs.createReadStream(path.resolve('./app/index.html'));
    return adminHtml
      .pipe(replaceStream('{application}', applicationHtml))
      .pipe(res);
  });
});

// 404 handler
app.use((req, res) => {
  res
    .status(404)
    .send('Resource not found');
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).json(err);
});

module.exports = http.createServer(app);
