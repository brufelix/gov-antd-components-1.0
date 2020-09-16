import React from 'react'
import { Table } from 'antd'

const columns = [
    {
        title: 'Título 1',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Título 2',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Título 3',
        dataIndex: 'name',
        key: 'name',
    },
]

const data = [
    {
        key: '1',
        name: 'Exemplo 1',
        age: 20,
        address: 'Exemplo 1',
    },
    {
        key: '2',
        name: 'Exemplo 2',
        age: 20,
        address: 'Exemplo 2',
    },
    {
        key: '3',
        name: 'Exemplo 3',
        age: 20,
        address: 'Exemplo 3',
    },
]

function TableGov(): JSX.Element {
    return (
        <Table columns={columns} dataSource={data} pagination={false}/>
    )
}

export default TableGov