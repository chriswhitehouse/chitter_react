import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Table from '../../components/Table'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

describe('<Table />', () => {
  it('renders table', () => {
      // Shallow render Data Table
      const container = shallow(<Table />);

      // There should be ONLY 1 table element
      const table = container.find('table');
      expect(table).toHaveLength(1);

  })
})
