import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import removeUserPropHOC from '../../inheritance/removeUserPropHOC.js';

Enzyme.configure({ adapter: new Adapter() });

describe('removeUserPropHOC', () => {

  class DemoComponent extends React.Component {
    render() {
      return (
        <div>{this.props.user || 'no_user'}</div>
      );
    }
  }

  it('should pass new props to wrapped component', () => {
    const NewComponent = removeUserPropHOC(DemoComponent);
    const wrapper = mount(<NewComponent user="sampleUser" foo="bar" />);
    const expectedComponent = <div>no_user</div>;

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
