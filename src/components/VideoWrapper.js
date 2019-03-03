import React from 'react';
import { css } from 'styled-components';

export const VideoWrapper = ({ children }) => (
  <figure
    css={css`
      margin: 1em 0;
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}
  >
    {children}
  </figure>
);
