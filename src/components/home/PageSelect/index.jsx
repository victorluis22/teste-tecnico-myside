import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { Container } from './style';
import { useRouter } from 'next/router';

export default function PageSelect({ currentPage, pageCount }) {
  const router = useRouter();

  const handleChange = (event, value) => {
    router.push({
      pathname: "/",
      query: {...router.query, page: parseInt(value)}, 
    });
  }

  return (
    <Container>
      <Pagination count={pageCount} page={currentPage} onChange={handleChange}/>
    </Container>
  );
}