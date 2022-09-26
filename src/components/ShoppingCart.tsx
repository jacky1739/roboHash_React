import React from "react";
import styles from './ShoppingCart.module.css'

interface Props {

}

interface State {
  isOpen: boolean
}

// 有三個參數, 第一個是 Props, 第二個是 State
class ShoppingCart extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render () {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
        onClick={() => {
          this.setState({ isOpen: !this.state.isOpen })
        }}
        >購物車 2 (件)</button>
        <div style={{
          display: this.state.isOpen ? "block" : "none"
        }}
        >
          <ul className={styles.cartDropDown}>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
