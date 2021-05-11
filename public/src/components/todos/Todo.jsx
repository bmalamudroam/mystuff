import React from 'react';
import styled from 'styled-components';
import Item from './ListItem.jsx';
import AddTodo from './AddTodo.jsx';
import axios from 'axios';
import Draggable from 'react-draggable';

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30vw;
  height: 50vw;
  background-color: lightblue;
  border: 2px solid pink;
  font-family: sans-serif;
  margin: auto;
  color: darkblue;
`;

const Title = styled.div`
  margin: 1vw;
  border-bottom: 3px dotted darkblue;
  font-size: 4vw;
  text-align: center;
`;

const List = styled.div`
  flex-grow: 6;
  margin: 0 5%;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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

  handleDelete(e) {
    e.preventDefault();
    let { id } = e.target;
    axios.delete(`/api/todo/${id}`)
      .then(result => {
        axios.get('/api/todos')
          .then(({ data }) => {
            this.setState({ todos: data });
          })
          .catch(err => {
            console.log(`Error retrieving tasks after removing todo: ${err}`);
          });
      })
      .catch(err => {
        console.log(`Error while deleting todo: ${err}`);
      });
  }

  handleAddNew(e) {
    e.preventDefault();
    let newTask = e.target.newTask.value;
    axios.post('/api/todo', { task: newTask })
      .then(result => {
        axios.get('/api/todos')
          .then(({ data }) => {
            this.setState({ todos: data });
          })
          .catch(err => {
            console.log(`Error retrieving tasks after new addition: ${err}`);
          });
      })
      .catch(err => {
        console.log('Error posting new task: ', err);
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
              <Item todo={todo} handleDelete={this.handleDelete.bind(this)}/>
            ))
          }
        </List>
        <AddTodo handleAddNew={this.handleAddNew.bind(this)}/>
      </TodoListWrapper>
    )
  }
}

export default TodoList;