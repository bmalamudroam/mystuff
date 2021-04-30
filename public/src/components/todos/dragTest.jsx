import React from 'react';
import styled from 'styled-components';

class DragTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragStart: {x: 0, y: 0},
      positionDelta: {x: 0, y: 0}
    }
    this.setState = this.setState.bind(this);
  }
  // componentDidMount() {

  // }

  handleDragStart(e) {
    // event.preventDefault();
    console.log('started');
    this.setState({dragStart: {x: e.clientX, y: 0}});
  }

  handleDrag(e) {
    event.preventDefault();
    const { dragStart } = this.state;
    this.setState({positionDelta: {x: e.clientX - dragStart.x, y: 0}});
  }
  render() {
    const { positionDelta } = this.state;
    const { x, y } = positionDelta;
    return (
      <TestBox x={x} draggable="true" onDrag={this.handleDrag.bind(this)} onDragStart={this.handleDragStart.bind(this)}>
        {x}
      </TestBox>
    )
  }
}

const TestBox = styled.div`
  position: absolute;
  border: 2px solid purple;
  width: 100px;
  height: 100px;
  transform: translateX(${({ x }) => x}px);
`;

export default DragTest;