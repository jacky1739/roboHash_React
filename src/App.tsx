import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
// import robots from './mookdata/robot.json'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

// interface Props {
//   username: string
// }

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [robotGallery, setRobotGallery] =useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `點擊${count}`
  }, [count])

  // useEffect 返回的是一個函數或null,
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setRobotGallery(data)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }
      }
      setLoading(false)
    }

    fetchData()
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
      {/* &&是一種二元判斷的符號 */}
      {/* 如果error不等於空 也不等於字串 就顯示error */}
      { (!error || error!=="") && <div>{error}</div>}
      { !loading ? (
        <div className={ styles.robotList }>
          { robotGallery.map((r, index) => {
            return (
              index % 2 === 0 ? (
                <RobotDiscount id={r.id} name={r.name} email={r.email} />
              ) : (
                <Robot id={r.id} name={r.name} email={r.email} />
              )
            )
          }) }
        </div>
      ) : (
        <h2>loading 加載中</h2>
      )}
    </div>
  )
}

export default App;
