import React, { useEffect, useState } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../utils/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/apiService';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching('search')
        setVideos(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  // console.log(videos.items, 'videos.items')
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
        <Videos videos={videos} />
      </Container>


      <Box p={2} sx={{ height: '90vh' }}></Box>
    </Stack>
  )
}

export default Main