import React from 'react';
import './App.css';
import robots from './mookdata/robot.json'
import Robot from './components/robot';

function App() {
  return (
    <ul>
      { robots.map((r, index) => {
        return <Robot id={r.id} name={r.name} email={r.email} />
      }) }
    </ul>
  );
}

export default App;
