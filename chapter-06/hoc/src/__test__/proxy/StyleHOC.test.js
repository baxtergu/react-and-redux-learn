import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ReactTestUtils from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

const { expect } = chai;


import styleHOC from '../../proxy/styleHOC.js';

describe('styleHOC', () => {

  class DemoComponent extends React.Component {
    render() {
      return <span style={{ color: 'green' }}>do something</span>;
    }
  }

  it('should get right style', () => {
    const NewComponent = styleHOC(DemoComponent, { color: 'red' });

    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('div')).to.have.style('color').equal('red');
    expect(wrapper.find('span')).to.have.style('color').equal('green');
  });
});



