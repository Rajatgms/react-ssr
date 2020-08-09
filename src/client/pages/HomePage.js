import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>I am Home Component !!!</div>
      <button onClick={() => console.log('Hello')}>Click Me</button>
    </div>
  );
};

export default {
  component: HomePage,
};
