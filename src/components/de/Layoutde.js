import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { min } from 'breakpoints';
import { Navigation, NAVIGATION_WIDTH } from 'components/de/Navigationde';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color:#222;
    font-family: Roboto, sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }
`;

const Content = styled.div`
  padding: 0 30px;

  ${min('tablet')} {
    min-height: 100vh;
    margin-left: ${NAVIGATION_WIDTH};
  }
`;

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <Content>{children}</Content>
  </>
);
