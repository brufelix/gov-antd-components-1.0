import React from 'react'
import { Modal, Button } from 'antd'
import { FaRegCheckCircle } from 'react-icons/fa'

type TPropsSweetAlert = {
    showModal(): void
    handleOk(): void
    handleCancel(): void
    visible: boolean
}

function SweetAlert(props: TPropsSweetAlert): JSX.Element {
    return(
        <Modal
            visible={props.visible}
            width={300}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Button key="submit" type="primary" onClick={props.handleOk}>
                  Ok
                </Button>
              </div>,
            ]}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <FaRegCheckCircle size={100} color='#52DF9A' />
              <h2 style={{ marginTop: 10, fontWeight: 500 }}>Parabéns!</h2>
              <p>Modal informativo!</p>
            </div>
          </Modal>
    )
}

export default SweetAlert