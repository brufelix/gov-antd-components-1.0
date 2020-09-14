import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import Drawer from '../../Drawer'
import { FaBars } from 'react-icons/fa'

const styleContainerHeader: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: 'white',
}

const styleContainerLink: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 100,
    fontSize: '0.9em'
}

const styleButtonMenu: React.CSSProperties = { display: 'flex', alignItems: 'center' }

const styleLink: React.CSSProperties = { margin: '5px 12px 5px 12px', color: 'white', textDecoration: 'none' }

function HeaderWithMenu(): JSX.Element {

    const { Header } = Layout

    const [visible, setVisible] = useState(false)

    function showDrawer(): void {
        setVisible(true)
    }

    function onClose(): void {
        setVisible(false)
    }

    return (
        <>
            <Header style={styleContainerHeader}>
                <div style={styleButtonMenu}>
                    <Button type='primary' onClick={showDrawer}
                        style={{ boxShadow: 'none' }}>
                        <FaBars size={20} />
                    </Button>
                    MENU
                </div>
                <div style={styleContainerLink}>
                    <a style={styleLink} href="/" >Perfil</a>
                    <a style={styleLink} href="/" >Configuração</a>
                    <a style={styleLink} href="/" >Exemplo</a>
                </div>
                <Drawer onClose={onClose} visible={visible} /> 
            </Header>
        </>
    )
}

export default HeaderWithMenu