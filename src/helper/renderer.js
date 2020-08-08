import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

const renderer = () => {
  const content = renderToString(<Home/>);
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
