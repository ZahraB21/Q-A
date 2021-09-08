import React from 'react';
import { UserIcon } from './Icons';

const Header = () => {
  return (
    <div>
      <a href="./">Q & A</a>
      <input placeholder="Search ..." type="text" />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};

export default Header;
