import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addNewPropsHOC from '../../proxy/addNewPropsHOC.js';

Enzyme.configure({ adapter: new Adapter() });

describe('addNewPropsHOC', () => {

  const DemoComponent = (props) => {
    return (
      <div>render something.</div>
    );
  };

  it('should pass new props to wrapped component', () => {
    const NewComponent = addNewPropsHOC(DemoComponent, { foo: 'bar' });
    const wrapper = shallow(<NewComponent />);
    const expectedComponent = <DemoComponent foo="bar" />

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

  it('should only overrides given props', () => {
    const NewComponent = addNewPropsHOC(DemoComponent, { foo: 'bar' });
    const wrapper = shallow(<NewComponent abc="def" />);
    const expectedComponent = <DemoComponent abc="def" foo="bar" />

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
