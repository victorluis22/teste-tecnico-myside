import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { useRouter } from 'next/router';
import { Container } from './style';

export default function PageSelect({ actual, total }) {
  const router = useRouter();

  const handleChange = (event, value) => {
    router.push({
      pathname: "/",
      query: {page: value}, 
    });
  }

  return (
    <Container>
      <Pagination count={total} page={actual} onChange={handleChange}/>
    </Container>
  );
}