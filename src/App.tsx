import React from 'react';
import Header from './Header';
import styles from './App.module.css';
import { HomePage } from './HomePage';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
