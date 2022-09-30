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
  count: number
}

class App extends React.Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    // 在這裡回傳的是一個 Promise 函式 因此還需要再用一個.then來接收
    .then( res => {
      console.log(res)
      return (
        res.json()
      )
    })
    .then(data => this.setState({robotGallery: data}))
  }

  render () {
    return (
      <div className={ styles.app }>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="" />
          <h1>羅伯特機器人online購物平台</h1>
        </div>
        <button onClick={() => {
          this.setState((prevState, prevPops) => {
            return { count: prevState.count + 1 }
          }, () => {
            console.log(this.state.count)
          })
          this.setState((prevState, prevPops) => {
            return { count: prevState.count + 1 }
          }, () => {
            console.log(this.state.count)
          })
        }}>+ 1</button>
        <span>state : {this.state.count}</span>
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
