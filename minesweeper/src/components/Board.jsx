import React from "react";
import createBoard from "./Utils";
import Cell from "./Cell";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(36, 2),
      inGame: true,
      won: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    if (this.state.inGame) {
      const updatedBoard = this.state.board.map((cell) => {
        if (cell.index === index) {
          return { ...cell, visible: true };
        }
        return cell;
      });
      if (this.state.board[index].hasMine) {
        this.setState({ inGame: false })
      }
      this.setState({ board: updatedBoard });
    }
  }

  render() {
    return (
      <div className="container">
        <Cell cell={this.state.board} onClick={this.onClick} />
        {!this.state.inGame && (
          <h1>Game Over</h1>
        )}
      </div>
    );
  }
}
