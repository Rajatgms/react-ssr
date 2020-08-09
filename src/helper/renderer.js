import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Routes/>
      </StaticRouter>
    </Provider>,
  );
  return `
    <html>
      <title>React SSR</title>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_DATA = ${serialize(store.getState())}
        </script>
        <script src='bundle.js'></script>
      </body>  
    </html>
    `;
};

export default renderer;
