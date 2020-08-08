import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

const renderer = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes/>
    </StaticRouter>,
  );
  return `
    <html>
      <title>React SSR</title>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>  
    </html>
    `;
};

export default renderer;
