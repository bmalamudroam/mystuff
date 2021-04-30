import React from 'react';
import styled from 'styled-components';

const AddTodoWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5%;
  /* width: 100%; */
  /* height: 10%; */
  background-color: white;
  border-top: 2px solid pink;
`;
const AddTodo = () => (
  <AddTodoWrapper>
    Add
  </AddTodoWrapper>
);

export default AddTodo;