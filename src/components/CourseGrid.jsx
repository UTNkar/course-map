import React from 'react';
import Box from '@mui/material/Box';
import BasicCard from './Course';

const CourseGrid = ({ gridHeight, gridWidth }) => {
    const courses = Array.from({ length: gridHeight * gridWidth }, (_, idx) => (
      <BasicCard key={idx} />
    ));
  
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {courses}
      </Box>
    );
  };
  
  export default CourseGrid;

