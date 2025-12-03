import React, { useState, useEffect } from 'react'
import { Input, Card, Form, Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
const index = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [documents, setDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const URL = "http://localhost:8000"

    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (_, __, index) => (currentPage - 1) * pageSize + index + 1

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Hobby',
            dataIndex: 'hobby',
            key: 'hobby',

        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={() => console.log('Edit', record.name)} className="px-3 py-1 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"> Edit </button>
                    <button onClick={() => console.log('Delete', record.name)} className="px-3 py-1 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition">Delete </button>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        axios.get(`${URL}/readTodos`)
            .then((res) => {
                const { data } = res
                setDocuments(data)
                console.log(data)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const handleEdit = () => {
        console.log('your data has been edited')
    }
    const handleDelete = () => {
        console.log('your data has been deleted')
    }
    const pageSize = 8;
    return (
        <div className="px-8 bg-[#a8dadc] min-h-[672px] w-full">
            <div className="flex justify-center items-center py-4">
                <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-3xl bg-white">
                    <Table columns={columns} dataSource={documents} pagination={{ pageSize: pageSize, onChange: (page) => setCurrentPage(page) }} bordered/>
                </div>
            </div>
        </div>

    )
}

export default index
