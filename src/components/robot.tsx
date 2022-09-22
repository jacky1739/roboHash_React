import React from 'react';
import styles from './Robot.module.css'

// 從父元件傳遞到子元件定義的接口
interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <div className={styles.cardContainer} key={id}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{ name }</h2>
      <p>{ email }</p>
    </div>
  )
}

export default Robot
