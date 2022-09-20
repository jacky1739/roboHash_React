import React from 'react';

// 從父元件傳遞到子元件定義的接口
interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <li key={id}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{ name }</h2>
      <p>{ email }</p>
    </li>
  )
}

export default Robot
