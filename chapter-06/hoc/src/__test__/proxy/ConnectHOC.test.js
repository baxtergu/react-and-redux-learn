import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import connectHOC from '../../proxy/connectHOC.js';

Enzyme.configure({ adapter: new Adapter() });

describe('connectHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>anything</div>;
    }
  }

  it('should pass mapped props', () => {
    const mapState = (state) => ({
      foo: state.foo
    });
    const connector = connectHOC(mapState);
    const Container = connector(DemoComponent);
    const initialState = { foo: 'bar' };
    const store = createStore(f => f, initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    expect(wrapper.find('DemoComponent').props()).toEqual({
      foo: 'bar'
    });

    expect(Container.displayName).toEqual('Connect(DemoComponent)');

  });

});


