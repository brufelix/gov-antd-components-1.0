import React from 'react'
import { HeaderWithSearch, HeaderWithMenu } from './components/headers'
import './App.less'

function App(): JSX.Element {
  return (
    <>
      {/* <HeaderWithMenu /> */}
      <HeaderWithSearch />
      <br />
      <HeaderWithMenu />
      {/* 
      <br />
      <div style={styleMain}>
        <h1>Paginação</h1>
        <Pagination />
      </div> */}
      <br />
    </>
  )
}

export default App