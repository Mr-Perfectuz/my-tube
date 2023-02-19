import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import React from 'react'

import { Main, Channel, Navbar, VideoDetail, Search } from '../'
const App = () => {
  return (
    <Box>
      <Navbar path='' element={Navbar} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='video/:id' element={<VideoDetail />} />
        <Route path='search/:id' element={<Search />} />
      </Routes>
    </Box>
  )
}

export default App