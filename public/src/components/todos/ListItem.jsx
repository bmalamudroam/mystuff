import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const ItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  height: 4vw;
  background-color: lightblue;
  border: 2px solid pink;
  border-radius: 20px;
  font-family: inherit;
  font-size: 1.2vw;
  line-height: 1.5vw;
  /* margin: 0 5%; */
`;

const TimeStamp = styled.div`
  box-sizing: border-box;
  flex: 2;
  padding: 1em;
  border-right: 2px solid pink;
  height: 100%;
`;

const Task = styled.div`
  flex: 10;
  padding: 1em;
  border-right: 2px solid pink;
  padding-left: 1em;
`;

const RemoveTodo = styled.div`
  padding: 1em;
  flex: 1;
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      task: '',
      deltaPosition: {
        x: 0, y: 0
      }
    }
    this.setState = this.setState.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e, ui) {
    // debugger;
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  render() {
    const { deltaPosition } = this.state;
    const { todo } = this.props;
    const { id, task } = todo;
    return (
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        // onStop={this.handleStop}
        onDrag={this.handleDrag}
      >
        <ItemWrapper key={id}>
          <TimeStamp>
            {/* 4/4/21 */}
            <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
          </TimeStamp>
          <Task>
            {task}
          </Task>
          <RemoveTodo>
            X
          </RemoveTodo>
        </ItemWrapper>
      </Draggable>
    )
  }
}

export default Item;