/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Pagination.styles.scss';
import { ReactComponent as ArrowLeftIcon } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svg/arrow-right.svg';

export interface PaginationProps {
  page: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  handlePagination: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, handlePagination }) => {
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          {page !== 1 && (
            <button
              type="button"
              className="pagination__button pagination__button--arrow"
              onClick={() => handlePagination(page - 1)}
            >
              <ArrowLeftIcon>
                <title>Arrow Left</title>
              </ArrowLeftIcon>
            </button>
          )}
        </li>

        <li className="pagination__item">
          {page > 2 && (
            <button
              type="button"
              onClick={() => handlePagination(1)}
              className="pagination__button"
            >
              {' '}
              1{' '}
            </button>
          )}
        </li>
        <li className="pagination__item">
          {page > 2 && (
            <span className="pagination__button pagination__button--separator"> ... </span>
          )}
        </li>
        <li className="pagination__item">
          {page > 1 && (
            <button
              type="button"
              className="pagination__button"
              onClick={() => handlePagination(page - 1)}
            >
              {` ${page - 1} `}
            </button>
          )}
        </li>
        <li className="pagination__item">
          <button
            type="button"
            className="pagination__button active"
            onClick={() => handlePagination(page)}
          >
            {` ${page} `}
          </button>
        </li>
        <li className="pagination__item">
          {page < totalPages && (
            <button
              type="button"
              className="pagination__button"
              onClick={() => handlePagination(page + 1)}
            >
              {` ${page + 1} `}
            </button>
          )}
        </li>
        <li className="pagination__item">
          {page < totalPages - 1 && (
            <span className="pagination__button pagination__button--separator"> ... </span>
          )}
        </li>
        <li className="pagination__item">
          {page < totalPages - 1 && (
            <button
              type="button"
              className="pagination__button"
              onClick={() => handlePagination(totalPages)}
            >
              {` ${totalPages} `}
            </button>
          )}
        </li>

        <li className="pagination__item">
          {page < totalPages && (
            <button
              type="button"
              className="pagination__button pagination__button--arrow"
              onClick={() => handlePagination(page + 1)}
            >
              <ArrowRightIcon>
                <title>Arrow Right</title>
              </ArrowRightIcon>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
