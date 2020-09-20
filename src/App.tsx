import React from 'react'
import { HeaderWithSearch, HeaderWithMenu } from './components/headers'
import Pagination from './components/pagination'
import './App.less'

const styleMain: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  borderTop: 'solid 2px #D3D3D3',
  padding: 5
}

function App(): JSX.Element {
  return (
    <>
      <HeaderWithMenu />
      <br />
      {/* <HeaderWithSearch />
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