import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button>Ask a question</button>
        <QuestionList data={getUnansweredQuestions()} />
      </div>
    </Page>
  );
};
