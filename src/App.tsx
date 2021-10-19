/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import { HomePage } from './HomePage';
import { AskPage } from './AskPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { fontFamily, fontSize, gray2 } from './Styles';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          // this is a tagged template literal
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ask" exact component={AskPage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/questions/:questionId" exact component={QuestionPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
