import React from 'react'
import { Modal, Button} from 'antd'

type TPropsModal = {
    showModal(): void
    handleOk(): void
    handleCancel(): void
    visible: boolean
} 

function ModalGov(props: TPropsModal): JSX.Element {
    return (
        <>
            <Modal
                visible={props.visible}
                title="Titulo Modal"
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                footer={[
                    <Button key="back" onClick={props.handleCancel}>
                        Fechar
                    </Button>,
                    <Button key="submit" type="primary" onClick={props.handleOk}>
                        Alguma acão
                    </Button>,
                ]}
            >
                <p>Algum conteúdo...</p>
                <p>Algum conteúdo...</p>
            </Modal>
        </>
    )
}

export default ModalGov