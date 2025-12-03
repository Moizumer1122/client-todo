import React from 'react'
import Navbar from '../../components/Header/index'
import Add from '../Todos/index'
import About from '../about/index'
import Contact from '../contact/index'
import { Route, Routes } from 'react-router-dom'
import Todos from '../Todos/Table'
const index = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default index
