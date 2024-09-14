import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { Container } from './style';
import { useRouter } from 'next/router';

export default function PageSelect({ currentPage, pageCount }) {
  const router = useRouter();

  const handleChange = (event, value) => {
    const query = router.query;

    // Só vai aparecer como query na URL páginas que não sejam a primeira
    if (value > 1) {
      query.page = parseInt(value);
    } else {
      delete query.page; 
    }

    router.push({
      pathname: "/",
      query
    });
  }

  return (
    <Container>
      <Pagination count={pageCount} page={currentPage} onChange={handleChange}/>
    </Container>
  );
}