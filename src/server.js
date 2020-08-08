import express from 'express';
import React from 'react';
import renderer from './helper/renderer';
import createStore from './helper/createStore';

const app = express();

// expose public folder as static content
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});
app.listen('3000', () => {
  console.log('Listening on port 3000');
});
