import React, { useState } from 'react'
import { Layout, Input, Button, Image } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const styleHeader: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to right, #00B894, #52DF9A)',
    height: 100
}

const styleLink: React.CSSProperties = {
    margin: '5px 12px 5px 12px',
    color: 'white',
    textDecoration: 'none',
    fontSize: 17
}

const styleContainerSearch: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: 32,
    width: '26%',
    border: 'solid 3px white',
    borderRadius: 30,
    overflow: 'hidden'
}

const styleSearch: React.CSSProperties = {
    width: '100%',
    height: '100%',
    border: 'none',
}

function HeaderWithSearch(): JSX.Element {

    const [loading, setLoading] = useState(false)
    const { Header } = Layout

    function onClick(): void {
        setLoading(!loading)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <Header style={styleHeader} >
            <div>
                <Image height={60} width="auto"
                    src="https://www.ceara.gov.br/wp-content/themes/ceara2017/assets/images/logo-ceara.svg" />
            </div>
            <div style={styleContainerSearch} >
                <Input size="small" style={styleSearch} placeholder="Buscar serviço" />
                <div style={{ background: '#00B894' }}>
                    <Button size="middle" style={{ width: 60, borderRadius: 30, border: 'none' }}
                        icon={<SearchOutlined />} loading={loading}
                        onClick={() => onClick()} />
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a style={styleLink} href="/">Sobre</a>
                <div style={{ background: 'white', height: 32, width: 1 }} />
                <a style={styleLink} href="/">Serviços para o cidadão</a>
            </div>
        </Header>
    )
}

export default HeaderWithSearch