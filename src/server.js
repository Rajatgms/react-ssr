import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'

const app = express()

// expose public folder as static content
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<Home/>)

  const html = `
    <html>
      <title>React SSR</title>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>  
    </html>
    `;

  res.send(html)
})
app.listen('3000', () => {
  console.log('Listening on port 3000')
})