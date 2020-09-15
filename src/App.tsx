import React from 'react'
import { HeaderWithSearch, HeaderWithMenu } from './components/Headers'
import Switch from './components/Switch'
import './App.less'

function App() {
  return (
    <>
      <HeaderWithMenu />
      <br />
      <HeaderWithSearch />
      <Switch />
    </>
  )
}

export default App
