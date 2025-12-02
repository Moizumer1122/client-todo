import React, { useState, useEffect } from 'react'
import { Input, Card, Form, Button } from 'antd';
import axios from 'axios';
const index = () => {
    const initalData = { name: '', hobby: '', location: '' }
    const [documents, setDocuments] = useState([]);
    const URL = "http://localhost:8000"


    useEffect(() => {
        axios.get(`${URL}/readTodos`)
            .then((res) => {
                const { data } = res
                console.log(data)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
<div className="px-8 bg-[#a8dadc] min-h-[500px] w-full">
    <div className="flex justify-center items-center py-4">
        <h1 className="text-center text-3xl font-semibold">Todos</h1>
    </div>
</div>



    )
}

export default index
