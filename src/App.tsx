import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { HeaderWithSearch, HeaderWithMenu } from './components/Headers'
import Pagination from './components/Pagination'
import Switch from './components/Switch'
import './App.less'

const styleMain: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
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

  function showModal(): void {
    setVisible(true)
  }

  function handleOk(): void {
    setVisible(false)
  }

  function handleCancel(): void {
    setVisible(false)
  }

  return (
    <>
      <ReachableContext.Provider value="Light">
        <HeaderWithMenu />
        <br />
        <HeaderWithSearch />
        <br />
        <div style={styleMain}>
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
          <Modal
            visible={visible}
            width={300}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <div style={styleMain}>
                <Button  key="submit" type="primary" onClick={handleOk}>
                  Ok
                </Button>
              </div>,
            ]}
          >
            <div>
              <CheckCircleOutlined />
              <h2>Parabéns!</h2>
              <p>Modal informativo!</p>
            </div>
          </Modal>
        </div>
        <br />
        <Switch />
        <UnreachableContext.Provider value="Bamboo" />
      </ReachableContext.Provider>
    </>
  )
}

export default App
