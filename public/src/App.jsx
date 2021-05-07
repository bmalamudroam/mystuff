import React from 'react';
import styled from 'styled-components';
import Todo from './components/todos/Todo.jsx';
import DragTest from './components/todos/dragTest.jsx';
const App = () => (
  <div>
    <div>add a bound, allow for resizing, add color fill options, allow for input images</div>
    {/* <Todo /> */}
    <DragTest />
  </div>
);

export default App;