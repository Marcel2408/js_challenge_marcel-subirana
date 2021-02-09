import React from 'react';
import renderer from 'react-test-renderer';
import CartDropdown from './Cart-dropdown.component';

it('expect to render Cart-dropdown component', () => {
  const actualSnapshot = renderer.create(<CartDropdown />).toJSON();
  expect(actualSnapshot).toMatchSnapshot();
});
