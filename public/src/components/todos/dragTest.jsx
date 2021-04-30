import React from 'react';
import styled from 'styled-components';

class DragTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragStart: {x: 0, y: 0},
      positionDelta: {x: 0, y: 0},
      currentPosition: {x: 0, y: 0},
    }
    this.setState = this.setState.bind(this);
  }
  // componentDidMount() {

  // }

  handleDragStart(e) {
    // event.preventDefault();
    console.log('start');
    this.setState({dragStart: {x: e.clientX, y: 0}});
    setTimeout(() => {
      e.target.style.visibility = "hidden";
    }, 1);
  }

  handleDragEnd(e) {
    event.preventDefault();
    const { dragStart, positionDelta } = this.state;
    console.log("end");
    setTimeout(() => {
      e.target.style.visibility = "visible";
    }, 1);
    this.setState({currentPosition: {x: e.clientX - dragStart.x, y: 0}});
  }
  render() {
    const { positionDelta } = this.state;
    const { x, y } = positionDelta;
    return (
      <TestBox x={x} draggable="true" onDragStart={this.handleDragStart.bind(this)} onDragEnd={this.handleDragEnd.bind(this)}>
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
  /* display: ${({dragging}) => (dragging ? "hidden" : "visible")}; */
  /* transform: translateX(${({ x }) => x}px); */
`;

export default DragTest;