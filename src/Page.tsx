/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Page = ({ title, children }: Props) => {
  return (
    <div
      css={css`
        margin: 50px auto 20px auto;
        padding: 30px 20px;
        max-width: 600px;
      `}
    >
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );
};
