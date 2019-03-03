import React from 'react';
import { css } from 'styled-components';

import { min } from 'breakpoints';

export const Article = ({ children }) => (
  <article
    css={css`
      border-radius: 15px;
      background-color: #333;
      line-height: 1.5em;
      color: white;
      margin: 20px auto;
      padding: 20px;
      max-width: 600px;
      font-size: 15px;

      ${min('desktop')} {
        max-width: 800px;
        font-size: 17px;
      }
    `}
  >
    {children}
  </article>
);
