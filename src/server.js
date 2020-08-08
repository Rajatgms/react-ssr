import express from 'express';
import React from 'react';
import renderer from './helper/renderer';

const app = express();

// expose public folder as static content
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});
app.listen('3000', () => {
  console.log('Listening on port 3000');
});
