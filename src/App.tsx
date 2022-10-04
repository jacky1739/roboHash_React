import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg'
// import robots from './mookdata/robot.json'
import Robot from './components/robot';
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [robotGallery, setRobotGallery] =useState<any>([])

  useEffect(() => {
    document.title = `點擊${count}`
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setRobotGallery(data))
  }, [])

  return (
    <div className={ styles.app }>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>羅伯特機器人online購物平台</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>+ 1</button>
      <span>state : {count}</span>
      <ShoppingCart></ShoppingCart>
      <div className={ styles.robotList }>
        { robotGallery.map((r) => {
          return <Robot id={r.id} name={r.name} email={r.email} />
        }) }
      </div>
    </div>
  )
}

export default App;
