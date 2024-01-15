import { useState } from "react";
import { tRepository } from "repositoryType";

const usePagination = (data: tRepository[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage: number = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const start: number = (currentPage - 1) * itemsPerPage;
    const end: number = start + itemsPerPage;
    return data.slice(start, end);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jumpToPage = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return { currentData, jumpToPage, maxPage, nextPage, prevPage };
};

export default usePagination;
