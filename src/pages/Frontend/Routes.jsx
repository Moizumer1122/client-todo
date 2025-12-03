import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from './index'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
    </Routes>
  )
}

export default AppRoutes