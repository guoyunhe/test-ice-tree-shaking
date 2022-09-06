import React from 'react';
import { render } from 'react-dom';
import { a } from './constants';

function Page1() {
  return <div>{a}</div>;
}

render(<Page1 />, document.body);
