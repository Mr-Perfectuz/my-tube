import React, { useEffect, useState } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../utils/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/apiService';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const selectedCategoryHandler = category => setSelectedCategory(category);

  useEffect(() => {
    const data = ApiService.fetching('search').then(data => console.log(data.items(c => c)));
  }, [])
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
        <Videos />
      </Container>


      <Box p={2} sx={{ height: '90vh' }}></Box>
    </Stack>
  )
}

export default Main