import React, { useState, useEffect } from 'react'
import { Input, Card, Form, Button, Space, Table, Tag, Modal } from 'antd';
import axios from 'axios';
import ScreenLoader from '../../components/ScreenLoader'
import Search from 'antd/es/input/Search';
const index = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [documents, setDocuments] = useState([]);
    const [filteredDocuments, setFilteredDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [editingTodo, setEditingTodo] = useState(null);
    const [form] = Form.useForm();
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
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => {
                        setEditingTodo(record);
                        form.setFieldsValue(record);
                    }} className="px-3! py-1! bg-green-500! text-white! font-medium! rounded! hover:bg-green-600! transition!"> Edit </Button>
                    <Button onClick={() => handleDelete(record)} className="px-3! py-1! bg-red-500! text-white! font-medium! rounded! hover:bg-red-600! transition!">Delete </Button>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        axios.get(`${URL}/readTodos`)
            .then((res) => {
                const { data } = res;
                const dataWithKey = data.map((item, index) => ({
                    ...item,
                    key: item.id || index
                }));

                setDocuments(dataWithKey);
                setFilteredDocuments(dataWithKey)
                console.log(dataWithKey);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <ScreenLoader />; // Show loader while fetching data
    }

    // const handleEdit = (record) => {
    //     const todo = { _id: record._id, name: record.name, hobby: record.hobby, location: record.location };
    //     axios.post(`${URL}/updateTodo`, todo)
    //         .then((res) => {
    //             console.log('res', res);
    //             notify.success('Success', 'your todo has been edited')
    //         })
    //         .catch((error) => {
    //             notify.error('Error', 'your todo has not edited due to technical issue')
    //             console.log(error)
    //         })
    // }
    const handleEdit = (record) => {

        form.validateFields().then(values => {
            const updatedTodo = { ...editingTodo, ...values };
            axios.post(`${URL}/updateTodo`, updatedTodo)
                .then(res => {
                    const updatedDocuments = documents.map(doc =>
                        doc._id === updatedTodo._id ? updatedTodo : doc
                    );
                    setDocuments(updatedDocuments);
                    setFilteredDocuments(updatedDocuments);
                    setEditingTodo(null); // close modal
                    notify.success('Success', 'your todo has been edited successfully')
                })
                .catch(err => console.log(err));
        });
    }
    const handleDelete = (record) => {
        console.log('record', record)

        axios.delete(`${URL}/deleteTodo/${record._id}`)
            .then((res) => {
                console.log('res', res);
                if (res.data === 'todo deleted') {
                    let documentsAfterDelete = documents.filter(doc => doc._id !== record._id)
                    setDocuments(documentsAfterDelete)
                    notify.success('Success', 'your todo has been deleted')
                    console.log(res.data)
                }
            })
            .catch((error) => {
                notify.error('Error', 'your todo has not deleted due to technical issue')
                console.log(error)
            })
    }
    // const handleSearch = () => {
    //     let text = e.target.value
    //     setFilteredDocuments(documents.filter(doc => doc.title.toLoweCase().includes(text.LowerCase())))
    // }
    const handleSearch = (value) => {
        const text = value.trim().toLowerCase();
        if (!text) {
            setFilteredDocuments(documents);
            return;
        }
        const filtered = documents.filter(doc =>
            (doc.name?.toLowerCase().includes(text)) ||
            (doc.hobby?.toLowerCase().includes(text)) ||
            (doc.location?.toLowerCase().includes(text))
        );
        setFilteredDocuments(filtered);
        setCurrentPage(1);
    };
    const pageSize = 8;
    return (
        <div className="px-8 bg-[#a8dadc] min-h-[672px] w-full">
            <div className="flex justify-center items-center py-4">
                <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-3xl bg-white">
                    <Input
                        placeholder="Search by Name, Hobby or Location"
                        allowClear

                        size="large"
                        onChange={(e) => handleSearch(e.target.value)}
                        style={{ marginBottom: 16 }}
                    />
                    <Table columns={columns} dataSource={filteredDocuments} pagination={{ pageSize: pageSize, onChange: (page) => setCurrentPage(page) }} bordered />
                    <Modal
                        title="Edit Todo"
                        open={!!editingTodo}
                        onOk={handleEdit}
                        onCancel={() => setEditingTodo(null)}
                        okText="Update"
                    >
                        <Form form={form} layout="vertical">
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Enter name' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="hobby" label="Hobby" rules={[{ required: true, message: 'Enter hobby' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Enter location' }]}>
                                <Input />
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </div>

    )
}

export default index
