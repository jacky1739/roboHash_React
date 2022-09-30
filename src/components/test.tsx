import React from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === 'SPAN')
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>購物車 2 (件)</span>
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none"
          }}
        >
          <ul>
            <li>robot2</li>
            <li>robot3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart