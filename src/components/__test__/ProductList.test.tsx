import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../product-list/ProductList.component';
import Spinner from '../spinner/Spinner.component';

it('shows initial spinner', () => {
  const wrapped = shallow(<ProductList />);
  expect(wrapped.find(Spinner).length).toEqual(1);
});
