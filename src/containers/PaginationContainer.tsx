import React, { useState } from 'react';
import Pagination from '../components/pagination/Pagination.component';

const PaginationContainer = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const handlePages = (updatePage: number) => setPage(updatePage);
  return <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />;
};

export default PaginationContainer;
