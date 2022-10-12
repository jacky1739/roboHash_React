import React from "react";
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from '../AppState'

// 元件對外傳遞資料的窗口, 從父元件傳遞向子元件的數據
interface Props {

}

// 元件內傳遞資料
interface State {
  isOpen: boolean
}

// 有三個參數, 第一個是 Props, 第二個是 State
class ShoppingCart extends React.Component<Props, State> {
  // constructor 是唯一可以初始化 state 的地方
  constructor (props: Props) {
    super(props)
    // 可以使用 this.state 來使用 state
    // 用 this.state 的方式來初始化 state
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 這裡的 this 指的是 handleClick, 而不是 class, 因此需要改成使用箭頭函數
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen })
    }
    // 指的是事件發生的元素
    console.log('e.target', e.target)
    // 指的是描述事件處理的綁定元素
    console.log('e.currentTarget', e.currentTarget)
  }

  render () {
    return (
      <appContext.Consumer>
        {
          (value) => {
            return (
              <div className={styles.cartContainer}>
                <button className={styles.button}
                // onClick={(e) => {
                  // state 是私有的, 可以認為state是組件的 "私有屬性"
                  // 可以用 setState() 來修改 State, 使用賦值的方式, 調用了 setState 後 React 會更新元件的狀態並調用 Render 方式重新渲染
                  // React 會對 setState 做出優化, 將多個 state 的修改合併為一次, 所以 setState 是異步的, 不能依賴當前的 state 來計算下一個 state
                  // this.setState({ isOpen: !this.state.isOpen })
                // }}
                  onClick={this.handleClick}
                >
                  <FiShoppingCart />
                  <span>購物車 {value.shoppingCart.items.length } (件)</span>
                </button>
                <div style={{
                  display: this.state.isOpen ? "block" : "none"
                }}
                >
                  <ul className={styles.cartDropDown}>
                    { value.shoppingCart.items.map((i) => {
                      return (
                        <li>{i.name}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          }
        }
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart
