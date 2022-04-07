import {useReducer} from 'react';
import clsx from 'clsx'
import logo from './logo.svg';
import styles from  './App.module.css';


function App() {
  const [isActive, toggleActive] = useReducer(isActive => !isActive, false)

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <button onClick={toggleActive}>toggleActive</button>
        <p className={clsx(styles.text, isActive && styles.isActive)}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* DangerousKeywordが公開されるまでは隠したい */}
        {/* <div className={styles.DangerousKeyword}>
          <p>DangerousKeyword</p>
        </div> */}
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
