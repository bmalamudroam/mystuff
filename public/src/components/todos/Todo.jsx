import React from 'react';
import styled from 'styled-components';
import Item from './ListItem.jsx';
import AddTodo from './AddTodo.jsx';
import axios from 'axios';

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30vw;
  height: 50vw;
  background-color: lightblue;
  /* padding: 0 1em; */
  border: 2px solid pink;
  font-family: sans-serif;

  margin: auto;
  color: darkblue;
`;

const Title = styled.div`
  margin: 1vw;
  border-bottom: 3px dotted darkblue;
  font-size: 4vw;
  /* font-family: sans-serif; */
  text-align: center;
`;

const List = styled.div`
  flex-grow: 6;
  margin: 0 5%;
`;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    axios.get('/api/todos')
      .then(({ data }) => {
        this.setState({ todos: data }, () => {
        });
      })
      .catch(err => {
        console.log(`Error retrieving todos from server: ${err}`);
      });
  }
  render() {
    const { todos } = this.state;
    return (
      <TodoListWrapper>
        <Title>
          Todos
        </Title>
        <List>
          {
            todos.map(todo => (
              <Item todo={todo} />
            ))
          }
        </List>
        <AddTodo />
      </TodoListWrapper>
    )
  }
}

export default TodoList;