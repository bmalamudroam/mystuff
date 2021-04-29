import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: lightblue;
  padding: 1em;
  border: 1px solid pink;
  margin: auto;
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      task: '',
    }
  }
  render() {
    return <ItemWrapper>Items</ItemWrapper>
  }
}

export default Item;