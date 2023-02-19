import React, { useState } from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { colors } from '../utils/colors';
import Category from '../category/category';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const selectedCategoryHandler = category => setSelectedCategory(category);


  return (
    <Stack style={{ display: 'flex', alignItems: 'center' }}>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          {selectedCategory}
          <span style={{ color: colors.secondary }}> videos</span>
        </Typography>
      </Container>


      <Box p={2} sx={{ height: '90vh' }}></Box>
    </Stack>
  )
}

export default Main