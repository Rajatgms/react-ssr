import React from 'react';

const NotFoundPage = (props) => {
  // access staticContext and mutate it to send 404 error back to browser
  // for BrowserRouter staticContext is undefine hence use {}
  const staticContext = props.staticContext ? props.staticContext : {};
  staticContext.notFound = true;
  return (<h3>Oops, route not found.</h3>);
};

export default {
  component: NotFoundPage,
};
