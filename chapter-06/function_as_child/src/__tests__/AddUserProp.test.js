import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddUserProp from '../AddUserProp.js';

Enzyme.configure({ adapter: new Adapter() });

describe('AddUserProp', () => {
  it('should add user', () => {
    const wrapper = mount(
      <AddUserProp>
        {
          (user) => <div>{user}</div>
        }
      </AddUserProp>
    );

    const userText = wrapper.find('div').text();
    expect(userText).toEqual('mock user');

  });

});


