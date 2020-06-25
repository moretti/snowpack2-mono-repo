import { render } from 'react-dom';
import React from 'react';

import './index.css';
import { Hello } from 'package-a';
import { N } from 'package-b'

function App() {
  return (
    <>
      <Hello name={N} />
    </>
  )
}

render(<App />, document.getElementById('app'));