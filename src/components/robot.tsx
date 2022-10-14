import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { withAddToCart } from './AddToCart'

// 從父元件傳遞到子元件定義的接口
export interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

const Robot: React.FC<RobotProps> = ({id, name, email, addToCart}) => {
  const value = useContext(appContext)

  return (
    <div className={styles.cardContainer} key={id}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入購物車</button>
    </div>
  )
}

export default withAddToCart(Robot)
