import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { Container } from './style';

export default function PageSelect({ currentPage, pageCount, onPageChange }) {

  const handleChange = (event, value) => {
    onPageChange(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container>
      <Pagination count={pageCount} page={currentPage} onChange={handleChange}/>
    </Container>
  );
}