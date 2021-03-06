import express from 'express';
import React from 'react';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { routesArray } from './client/Routes';

const app = express();

// Setup proxy for API server
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    // required for API server
    proxyReqOptDecorator: (opts) => {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  },
));

// expose public folder as static content
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(routesArray, req.path).map(routesItem => {
    const { route } = routesItem;
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => { // mark resolve individual promise
    if (promise) {
      return new Promise((resolve) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });

});
app.listen('3000', () => {
  console.log('Listening on port 3000');
});
