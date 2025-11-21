import React, { PureComponent } from 'react';

class PureDisplay extends PureComponent {
  render() {
    console.log('PureDisplay rendered!');
    return <h3>Hello, {this.props.name} 👋</h3>;
  }
}

export default PureDisplay;
