import { Stack } from '@mui/system'
import React from 'react'
import { colors } from '../utils/colors'
import { category } from '../utils'

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      {
        category.map((item => (
          <button
            key={item.id}
            className='category-btn'
            onClick={() => selectedCategoryHandler(item.name)}
            style={{
              borderRadius: '0',
              background: item.name === selectedCategory && colors.secondary,
              color: item.name === selectedCategory && colors.white
            }}>
            <span style={{ color: item.name === selectedCategory ? colors.white : colors.secondary, marginRight: '15px' }}>{item.icon}</span>
            <span style={{ opacity: '1' }}>{item.name}</span>
          </button>
        )))
      }
    </Stack>
  )
}

export default Category