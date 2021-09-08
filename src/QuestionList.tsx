import React from 'react';
import { QuestionData } from './QuestionsData';
import { Question } from './Question';

interface Props {
  data: QuestionData[];
}

export const QuestionList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((question) => {
        return (
          <li key={question.questionId}>
            <Question data={question} />
          </li>
        );
      })}
    </ul>
  );
};
