import React from 'react';
import styled from 'styled-components';
// import Draggable from 'react-draggable';

const AddTodoWrapper = styled.form`
  display: flex;
  box-sizing: border-box;
  background-color: white;
  border-top: 2px solid pink;
  justify-content: space-between;
  margin: 0;
  font-family: inherit;
`;

const NewTodoInput = styled.input`
  border: none;
  outline: none;
  padding: 4%;
  flex: 4;
`;

const SubmitTodo = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  border-left: 2px solid pink;
`;

const AddTodo = ({ handleAddNew }) => (
  <AddTodoWrapper onSubmit={handleAddNew}>
    <NewTodoInput type="text" name="newTask" placeholder="New Todo..."/>
    <SubmitTodo type="submit" value="Add" />
  </AddTodoWrapper>
);

export default AddTodo;