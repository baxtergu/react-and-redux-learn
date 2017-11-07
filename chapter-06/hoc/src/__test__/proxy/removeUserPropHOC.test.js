import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import removeUserPropHOC from '../../proxy/removeUserPropHOC.js';

Enzyme.configure({ adapter: new Adapter() });

describe('removeUserPropHOC', () => {

  const DemoComponent = (props) => {
    return (
      <div>render something.</div>
    );
  };

  it('should pass new props to wrapped component', () => {
    const NewComponent = removeUserPropHOC(DemoComponent);
    const wrapper = mount(<NewComponent user="sampleUser" foo="bar" />);
    const expectedComponent = <DemoComponent foo="bar" />

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
