import React from 'react';

class Heading extends React.Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

export default Heading;
