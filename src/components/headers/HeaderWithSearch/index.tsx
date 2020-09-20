import React, { useState } from 'react'
import { Layout, Input, Button, Image } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import {
    styleContainerSearch,
    styleHeader,
    styleLink,
    styleSearch
} from './style'

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
                <div style={{ background: '#52DF9A' }}>
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