import express from 'express';
import React from 'react';
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { matchRoutes } from 'react-router-config';
import { routesArray } from './client/Routes';

const app = express();

// expose public folder as static content
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  const promises = matchRoutes(routesArray, req.path).map(routesItem => {
    const { route } = routesItem;
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });

});
app.listen('3000', () => {
  console.log('Listening on port 3000');
});
