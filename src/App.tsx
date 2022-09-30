import React from 'react';
import logo from './assets/images/logo.svg'
// import robots from './mookdata/robot.json'
import Robot from './components/robot';
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

interface Props {

}

interface State {
  robotGallery: any[]
}

class App extends React.Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({robotGallery: data}))
  }

  render () {
    return (
      <div className={ styles.app }>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="" />
          <h1>羅伯特機器人online購物平台</h1>
        </div>
        <ShoppingCart></ShoppingCart>
        <div className={ styles.robotList }>
          { this.state.robotGallery.map((r, index) => {
            return <Robot id={r.id} name={r.name} email={r.email} />
          }) }
        </div>
      </div>
    )
  }
}

export default App;
