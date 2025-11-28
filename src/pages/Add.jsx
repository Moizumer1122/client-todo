import React, { useState } from 'react'
import { Input, Card, Form, Button } from 'antd';
import axios from 'axios';
const Add = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [state, setState] = useState(initalData);
    const URL = "http://localhost:8000"

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, hobby, location } = state;
        name.trim();
        hobby.trim();
        location.trim();
        if (name.length < 3) { return alert('more than 3 characters must'); }
        if (hobby.length < 3) { return alert('more than 3 characters must'); }
        if (location.length < 3) { return alert('more than 3 characters must'); }
        let todo = { name, hobby, location };
        axios.post(`${URL}/createTodo`,todo  )
            .then((res) => {
                console.log('res', res);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (

        <div className="mx-auto py-5 px-8 bg-[#a8dadc] min-h-screen w-screen">
            <div className="flex justify-center items-center mt-35">
                <Card className='w-90! h-111! box-shadow' >
                    <div className="my-8">
                        <h1 className='text-center text-3xl font-semibold'>Add Todo</h1>

                        <div className='ml-15'>
                            <div className='mt-11'>
                                <Form layout='vertical' onSubmitCapture={handleSubmit}>
                                    <Form.Item label='name' className='mb-1!'>
                                        <Input size='large' placeholder="enter name" className='w-50!' name='name' onChange={handleChange} value={state.name} />
                                    </Form.Item>

                                    <Form.Item label='Hobby' className='mb-1!'>
                                        <Input size='large' placeholder="enter hobby" className='w-50!' name='hobby' onChange={handleChange} value={state.hobby} />
                                    </Form.Item>

                                    <Form.Item label='Location' className='mb-1!'>
                                        <Input size='large' placeholder="enter location" className='w-50!' name='location' onChange={handleChange} value={state.location} />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" className='ml-15! mt-5!' htmlType='submit'>Add todo</Button>
                                    </Form.Item>

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