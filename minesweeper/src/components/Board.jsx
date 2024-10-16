import React from "react";
import createBoard from "./Utils";
import Cell from "./Cell";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(36, 10)
    };

    this.onClick = this.onClick.bind(this);
  }
  
  onClick(visible, index) {
    console.log('In onClick Board.jsx', visible);
    console.log('In onClick Board.jsx', index);
    // Ändra visible i this.state.board
    // Bättre namn på parametrar
  }
  
  
  
  render() {
    return(
      <div className="container">
        <Cell cell={this.state.board} onClick={this.onClick}/>
      </div>
    )
  }
}