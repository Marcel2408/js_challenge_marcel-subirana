/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import Pagination, { PaginationProps } from '../pagination/Pagination.component';

describe('<Pagination />', () => {
  it('renders the component from the beginning', () => {
    const mockProps: PaginationProps = {
      page: 1,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);
    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);
  });

  it('renders the component from the end', () => {
    const mockProps: PaginationProps = {
      page: 5,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(4);
    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);
  });

  it('renders the component from the end', () => {
    const mockProps: PaginationProps = {
      page: 3,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);
    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);
    wrapper.find('button').at(2).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);
  });
});
