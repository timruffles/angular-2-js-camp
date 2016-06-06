// taken from lite-server, but modified logs to be actually
// useful rather than noisy crap
"use strict";

var browserSync = require('browser-sync').create('lite-server');
var path = require('path');
var _ = require('lodash');

var fallback = require('connect-history-api-fallback');

module.exports = {
  logFileChanges: false, // why, why why would this be interesting?
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  files: ['./**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: {
    baseDir: './',
    middleware: [
      fallback({
        index: '/index.html',
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
      })
    ]
  }
};

