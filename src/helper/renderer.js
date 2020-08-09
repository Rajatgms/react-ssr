import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

const renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes/>
      </StaticRouter>
    </Provider>,
  );
  return `
    <html>
      <title>React SSR</title>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_DATA = ${JSON.stringify(store.getState())}
        </script>
        <script src='bundle.js'></script>
      </body>  
    </html>
    `;
};

export default renderer;
