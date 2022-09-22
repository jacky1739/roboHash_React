import React from 'react';
// import './App.css';
import robots from './mookdata/robot.json'
import Robot from './components/robot';
import styles from './App.module.css'

function App() {
  return (
    <div className={ styles.app }>
      <div className={ styles.robotList }>
        { robots.map((r, index) => {
          return <Robot id={r.id} name={r.name} email={r.email} />
        }) }
      </div>
    </div>
  );
}

export default App;
