/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from './Styles';
import React from 'react';
import { QuestionData } from './QuestionsData';
import { Link } from 'react-router-dom';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent }: Props) => {
  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        <Link
          css={css`
            text-decoration: none;
            color: ${gray2};
          `}
          to={`questions/${data.questionId}`}
        >
          {data.title}
        </Link>
      </div>
      {}
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${data.userName} on 
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};

Question.defaultProps = {
  showContent: true,
};
