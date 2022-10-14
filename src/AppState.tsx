import React, { useState, PropsWithChildren } from 'react'

interface AppStateValue {
  username: string;
  shoppingCart: { items: {id: number, name: string}[] }
}

const defaultContextValue: AppStateValue = {
    username: 'jacky',
    shoppingCart: { items: [] }
  }

// 可以在全局使用Context的資料
export const appContext = React.createContext(defaultContextValue)
// 可以在全局使用setState的這個方法
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)


// 會以函數式元件來定義 appStateProvider
// 它的功能就是把所有子元件包裹起來, 並從全局的角度來提供資料的支持
export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState(defaultContextValue)

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}