import React from 'react'
import { HeaderWithSearch, HeaderWithMenu } from './components/Headers'
import Pagination from './components/Pagination'
import Switch from './components/Switch'
import './App.less'

function App() {
  return (
    <>
      <HeaderWithMenu />
      <br />
      <HeaderWithSearch />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pagination />
      </div>
      <br />
      <Switch />
    </>
  )
}

export default App
