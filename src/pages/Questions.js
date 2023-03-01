import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Questions = () => {
  return (
    <Box>
      <Typography>Question 1</Typography>
      <Typography mt={5}>This is the question</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={5}>Score 2 / 5</Box>
    </Box>
  )
}

export default Questions