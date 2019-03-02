import React from 'react';

import Header from 'components/Header';

import 'styles/style.css';

export default ({ children }) => {
  throw Error('how unfortunate');

  return (
    <>
      <Header />
      <div id="contentWrap">{children}</div>
    </>
  );
};
