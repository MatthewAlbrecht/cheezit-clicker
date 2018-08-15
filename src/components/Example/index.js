import React from 'react';
import Example from './Example';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Example {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));