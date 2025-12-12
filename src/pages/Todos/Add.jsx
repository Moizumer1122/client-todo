import React, { useState } from 'react'
import { Input, Card, Form, Button } from 'antd';
import axios from 'axios';
import notify from '../../config/global';
const Add = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [isProcessing, setIsProccessing] = useState(false)
    const [state, setState] = useState(initalData);
    const URL = "https://server-yhn9.vercel.app"
    const { Item } = Form;
    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, hobby, location } = state;
        name = name.trim();
        hobby = hobby.trim();
        location = location.trim();

        let todo = { name, hobby, location };
        setIsProccessing(true)
        axios.post(`${URL}/createTodo`, todo)
            .then((res) => {
                console.log('res', res);
                notify.success('Success', 'your todo has been created')
                setIsProccessing(false)
                setState(initalData);
            })
            .catch((error) => {
                notify.error('Error', 'your todo has not added due to technical issue')
                console.log(error)
            })
    };

    return (

        <div className="mx-auto py-20 px-8 bg-[#a8dadc]  min-h-[91.3vh] w-full ">
            <div className="flex justify-center items-center">
                <Card className='w-85! h-120! box-shadow' >
                    <div className="my-8">
                        <h1 className='text-center text-3xl font-semibold'>Add Todo</h1>

                        <div className='ml-5'>
                            <div className='mt-11'>
                                {/* <Form layout='vertical' onSubmitCapture={handleSubmit} >
                                    <Form.Item label='name' className='mb-1!'name='name' rules={[{ required: true, message: 'Please enter your name' }]} >
                                        <Input size='large' placeholder="enter name" className='w-50!'  onChange={handleChange} value={state.name} />
                                    </Form.Item>

                                    <Form.Item label='Hobby' className='mb-1!' name='hobby' rules={[{ required: true, message: 'Please enter your hobby' }]}>
                                        <Input size='large' placeholder="enter hobby" className='w-50!'  onChange={handleChange} value={state.hobby} />
                                    </Form.Item>

                                    <Form.Item label='Location' className='mb-1!' name='location' rules={[{ required: true, message: 'Please enter your location' }]}>
                                        <Input size='large' placeholder="enter location" className='w-50!'  onChange={handleChange} value={state.location} />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" className='ml-15! mt-5!' htmlType='submit'>Add todo</Button>
                                    </Form.Item>

                                </Form> */}
                                <Form
                                    layout='vertical'
                                    onSubmitCapture={handleSubmit}  // ⭐ traditional submit
                                >

                                    <Item
                                        label="Name"
                                        rules={[{ required: true, message: 'Please enter your name' }]}
                                    >
                                        <Input
                                            name='name'
                                            size='large'
                                            placeholder="Enter name"
                                            value={state.name}
                                            onChange={handleChange}
                                            required
                                            />
                                    </Item>

                                    <Item
                                        label="Hobby"
                                        rules={[{ required: true, message: 'Please enter your hobby' }]}
                                        >
                                        <Input
                                        required
                                        name='hobby'
                                        size='large'
                                            placeholder="Enter hobby"
                                            value={state.hobby}
                                            onChange={handleChange}
                                            />
                                    </Item>

                                    <Item
                                        label="Location"
                                        rules={[{ required: true, message: 'Please enter your location' }]}
                                        >
                                        <Input
                                            name='location'
                                            required
                                            size='large'
                                            placeholder="Enter location"
                                            value={state.location}
                                            onChange={handleChange}
                                        />
                                    </Item>

                                    <Item>
                                        <Button className='ml-20! mt-4!'
                                            loading={isProcessing}
                                            type="primary"
                                            htmlType="submit" // triggers your handleSubmit
                                        >
                                            Add Todo
                                        </Button>
                                    </Item>

                                </Form>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
        </div>

    )
}

export default Add