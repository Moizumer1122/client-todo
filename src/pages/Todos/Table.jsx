import React, { useState, useEffect } from 'react'
import { Input, Card, Form, Button } from 'antd';
import axios from 'axios';
const Table = () => {
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
   
       <div className="mx-auto py-20 px-8 bg-[#a8dadc]">
    <div className="flex justify-center items-center mt-20">
        <h1 className="text-center text-3xl font-semibold">Todos</h1>
    </div>
</div>


    )
}

export default Table
