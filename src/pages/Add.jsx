import React from 'react'
import { Input, Card, Form } from 'antd';
const Add = () => {
    return (

        <div className="container mx-auto py-5 px-8 bg-[#a8dadc] min-h-screen bo">
            <div className="flex justify-center items-center">
                <Card className='w-100! h-135! shadow-lg' >
                    <div className="my-5">
                        <h1 className='text-center text-3xl font-semibold'>Add Todo</h1>

                        <div className='ml-20'>
                            <div className='mt-20'>
                                <Form layout='vertical'>
                                    <Form.Item label='name' className='mb-1!'>
                                        <Input size='large' placeholder="enter name" className='w-55!' />
                                    </Form.Item>
                                    <Form.Item label='Hobby' className='mb-1!'>
                                        <Input size='large' placeholder="enter hobby" className=' w-55!' />
                                    </Form.Item>
                                    <Form.Item label='Location' className='m-1!'>
                                        <Input size='large' placeholder="enter hobby" className=' w-55!' />
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
