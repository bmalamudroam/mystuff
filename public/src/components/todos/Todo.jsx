import React from 'react';
import styled from 'styled-components';
import Item from './ListItem.jsx';
import axios from 'axios';

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
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    axios.get('/api/todos')
      .then(({ data }) => {
        this.setState({ tasks: data }, () => {
        });
      })
      .catch(err => {
        console.log(`Error retrieving todos from server: ${err}`);
      });
  }
  render() {
    const { tasks } = this.state;
    return (
      <TodoWrapper>
        <Title>
          Todos
        </Title>
        <List>
          {
            tasks.map(task => (
              <Item task={task} />
            ))
          }
        </List>
      </TodoWrapper>
    )
  }
}

export default Todo;