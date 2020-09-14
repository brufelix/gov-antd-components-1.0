import React from 'react'
import { Drawer, Menu, Image } from 'antd'

type TDrawerMenu = {
    onClose(): void
    visible: boolean
}

function DrawerMenu(props: TDrawerMenu): JSX.Element {

    const footer: JSX.Element =
        <>
            <Image src={'https://www.ceara.gov.br/wp-content/uploads/2017/08/logo-ceara.png'}
                height='auto' width='auto' style={{ paddingLeft: 30 }} />
        </>

    return (
        <>
            <Drawer
                title='Menu'
                placement={`left`}
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
                key={`left`}
                footer={footer}
            >
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" >
                        Perfil
                    </Menu.Item>
                    <Menu.Item key="2" >
                        Configuração
                    </Menu.Item>
                    <Menu.Item key="3" >
                        Exemplo
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    )
}

export default DrawerMenu