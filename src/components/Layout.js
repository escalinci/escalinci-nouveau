import React from 'react';

import Header from 'components/Header';

import 'styles/style.css';

export default ({ children }) => (
  <>
    <Header />
    <div id="contentWrap">{children}</div>
  </>
);
