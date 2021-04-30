import React from 'react';
import styled from 'styled-components';

class DragTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionDelta: {x: 0, y: 0}
    }
    this.setState = this.setState.bind(this);
  }
  // componentDidMount() {

  // }
  handleDrag(e) {
    debugger;
  }
  render() {
    const { positionDelta } = this.state;
    const { x, y } = positionDelta;
    return (
      <TestBox x={x}>
        asdasdsd
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