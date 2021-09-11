import React from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Page = ({ title, children }: Props) => {
  return (
    <div>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );
};
