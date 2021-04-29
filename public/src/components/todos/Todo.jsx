import React from 'react';
import styled from 'styled-components';
import Item from './ListItem.jsx';

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  height: 70%;
  background-color: lightblue;
  padding: 0 1em;
  border: 2px solid pink;
  margin: auto;
  color: darkblue;
`;

const Title = styled.h3`
  border-bottom: 3px dotted darkblue;
  font-size: 4vh;
  font-family: sans-serif;
  text-align: center;
`;

const List = styled.div`
  flex-grow: 4;
`;

class Todo extends React.Component {
  render() {
    return (
      <TodoWrapper>
        <Title>
          Todos
        </Title>
        <List>

        </List>
      </TodoWrapper>
    )
  }
}

export default Todo;