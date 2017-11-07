import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {spy} from 'sinon';

import CountDown from '../CountDown.js';

Enzyme.configure({ adapter: new Adapter() });

describe('CountDown', () => {
  it('should count down', (done) => {
    const counter = spy();
    const wrapper = mount(
      <CountDown startCount={2}>
        {
          (count) => {
            counter();
            if (count === 0) {
              expect(counter.callCount).toEqual(3);
              done();
            }
            return null;
          }
        }
      </CountDown>
    );
  });

});


