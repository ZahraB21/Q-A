import React, { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionLoading, setQuestionLoading] = useState(true);

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log('Ask Question is clicked');
  };

  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button onClick={handleAskQuestionClick}>Ask a question</button>
        {questionLoading ? (
          <div>Loading</div>
        ) : (
          <QuestionList
            data={questions}
            // renderItem={(question) => <div>{question.title}</div>}
          />
        )}
      </div>
    </Page>
  );
};
