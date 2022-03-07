import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import PropertyCard from '../../PropertyCard';

describe('PropertyListing', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PropertyListing />);
    expect(wrapper.find('.PropertyListing')).toHaveLength(1);
  });

  it('should render five property cards', async () => {
    render(<PropertyListing />);
    await render(<PropertyCard />);
  });
});
