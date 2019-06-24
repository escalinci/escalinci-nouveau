import React from 'react';
import { css } from 'styled-components';

import { min } from 'breakpoints';

export const Header = ({ children }) => (
  <header
    css={css`
      font-weight: 100;
      font-size: 36px;
      text-align: center;
      color: white;
      padding: 30px 10px 10px 10px;

      ${min('desktop')} {
        font-size: 42px;
      }
    `}
  >
    {children}
  </header>
);
