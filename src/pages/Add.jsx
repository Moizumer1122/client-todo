import React, { useState } from 'react'
import { Input, Card, Form } from 'antd';
const Add = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [state, setState] = useState(initalData);
    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
        console.log(state);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
    return (

        <div className="mx-auto py-5 px-8 bg-[#a8dadc] min-h-screen w-screen">
            <div className="flex justify-center items-center mt-45">
                <Card className='w-90! h-105! box-shadow' >
                    <div className="my-5">
                        <h1 className='text-center text-3xl font-semibold'>Add Todo</h1>

                        <div className='ml-15'>
                            <div className='mt-11'>
                                <Form layout='vertical' onFinish={handleSubmit}>
                                    <Form.Item label='name' className='mb-1!'>
                                        <Input size='large' placeholder="enter name" className='w-50!' name='name' onChange={handleChange} value={state.name} />
                                    </Form.Item>
                                    <Form.Item label='Hobby' className='mb-1!'>
                                        <Input size='large' placeholder="enter hobby" className='w-50!' name='hobby' onChange={handleChange} value={state.hobby} />
                                    </Form.Item>
                                    <Form.Item label='Location' className='mb-1!'>
                                        <Input size='large' placeholder="enter location" className='w-50!' name='location' onChange={handleChange} value={state.location} />
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
