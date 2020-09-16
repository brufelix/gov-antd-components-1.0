import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { HeaderWithSearch, HeaderWithMenu } from './components/Headers'
import Pagination from './components/Pagination'
import ModalGov from './components/Modal'
import SweetAlert from './components/SweetAlert'
import PopoverGov from './components/Popover'
import PopoverHover from './components/PopoverHover'
import TableGov from './components/Table'
import Switch from './components/Switch'
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

const ReachableContext = React.createContext({})
const UnreachableContext = React.createContext({})

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{name => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{name => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
}

function App() {
  const [modal, contextHolder] = Modal.useModal()
  const [visible, setVisible] = useState<boolean>(false)
  const [visible2, setVisible2] = useState<boolean>(false)

  function showModal(): void {
    setVisible(true)
  }

  function showModal2(): void {
    setVisible2(true)
  }

  function handleOk2(): void {
    setVisible2(false)
  }

  function handleOk(): void {
    setVisible(false)
  }

  function handleCancel(): void {
    setVisible(false)
  }

  function handleCancel2(): void {
    setVisible2(false)
  }

  return (
    <>
      <ReachableContext.Provider value="Light">
        <br />
        <HeaderWithMenu />
        <br />
        <HeaderWithSearch />
        <br />
        <div style={styleMain}>
          <h1>Paginação</h1>
          <Pagination />
        </div>
        <br />
        <div style={styleMain} >
          <Button
            onClick={() => {
              modal.info(config);
            }}
          >
            Info
        </Button>
          {contextHolder}
        </div>
        <br />
        <div style={styleMain}>
          <Button type="primary" onClick={showModal}>
            SWEET ALERT
          </Button>
          <SweetAlert handleCancel={handleCancel}
            handleOk={handleOk} showModal={showModal} visible={visible} />
        </div>
        <br />
        <div style={styleMain}>
          <Button type="primary" onClick={showModal2}>
            Modal
          </Button>
          <ModalGov handleCancel={handleCancel2}
            handleOk={handleOk2} showModal={showModal2} visible={visible2} />
        </div>
        <br />
        <div style={styleMain} >
          <h1>Popover</h1>
          <PopoverGov />
        </div>
        <br />
        <div style={styleMain}>
          <PopoverHover />
        </div>
        <br />
        <div style={styleMain}>
          <TableGov />
        </div>
        <br />
        <Switch />
        <UnreachableContext.Provider value="Bamboo" />
      </ReachableContext.Provider>
    </>
  )
}

export default App
