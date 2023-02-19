import React from 'react'
import { Stack, Box } from '@mui/material'
import { Logo } from './style'
import { colors } from '../utils/colors'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'


const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={2}
      height={'10vh'}
      sx={{ position: 'sticky', top: 0, zIndex: 999, backgroundColor: colors.primary }}>


      <Link to={'/'}>
        <a href="#"><Logo>My-Tube</Logo></a>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar