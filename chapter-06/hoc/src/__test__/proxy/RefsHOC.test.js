import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import refsHOC from '../../proxy/refsHOC.js';

Enzyme.configure({ adapter: new Adapter() });

describe('refsHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>do something</div>;
    }
  }

  it('should get wrapped component by ref', () => {
    const NewComponent = refsHOC(DemoComponent);
    const wrapper = mount(<NewComponent foo="bar" />);

    expect(wrapper.instance()._root).toBeInstanceOf(DemoComponent);
  });
});


