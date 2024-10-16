import React from "react";
import Cell from "./Cell";
import createBoard from "./Utils";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(32, 10),
    }
    
    console.log(this.state.board)
  }

  render() {
    return(
      <>
        Board
      </>
    )
  }
}