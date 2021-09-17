import React from 'react';
import { UserIcon } from './Icons';
import styles from './Header.module.css';

const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <a href="./">Q & A</a>
      <input
        placeholder="Search ..."
        type="text"
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};

export default Header;
