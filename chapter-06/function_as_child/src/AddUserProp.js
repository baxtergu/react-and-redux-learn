import React from 'react';
import PropTypes from 'prop-types';

const loggedinUser = 'mock user';

class AddUserProp extends React.Component {
  render() {
    const user = loggedinUser;
    return this.props.children(user)
  }
}

AddUserProp.propTypes = {
  children: PropTypes.func.isRequired
}

export default AddUserProp;


