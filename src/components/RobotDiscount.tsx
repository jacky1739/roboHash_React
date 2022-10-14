import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'
import { withAddToCart } from './AddToCart'

// 從父元件傳遞到子元件定義的接口
interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

const RobotDiscount: React.FC<RobotProps> = ({id, name, email}) => {
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const addToCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }

  return (
    <div className={styles.cardContainer} key={id}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入購物車</button>
    </div>
  )
}

export default withAddToCart(RobotDiscount)
