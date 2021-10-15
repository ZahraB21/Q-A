import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router-dom';

export const QuestionPage = () => {
  let { questionId } = useParams<{ questionId: string }>();
  return <Page>Question Page {questionId}</Page>;
};
