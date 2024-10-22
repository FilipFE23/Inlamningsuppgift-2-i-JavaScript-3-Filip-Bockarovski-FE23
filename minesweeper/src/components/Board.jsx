import React from "react";
import createBoard from "./Utils";
import Cell from "./Cell";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(25, 2),
      inGame: true,
      won: false,
    };

    this.onClick = this.onClick.bind(this);
    this.winCheck = this.winCheck.bind(this);
  }

  onClick(index) {
    if (this.state.inGame && !this.state.won) {
      const updatedBoard = this.state.board.map((cell) => {
        if (cell.index === index) {
          return { ...cell, visible: true };
        }
        return cell;
      });
      if (this.state.board[index].hasMine) {
        this.setState({ inGame: false });
      }
      this.setState({ board: updatedBoard }) 
      this.winCheck(updatedBoard);
    }
  }

  winCheck(board) {
    const noMines = board.every((cell) => {
      return cell.hasMine || cell.visible;
    });
    
    if (noMines) {
      this.setState({ won: true });
    }
  }

  render() {
    return (
      <div className="board">
        <>
          {this.state.board.map((cell, id) => (
            <Cell key={id} cell={cell} onClick={this.onClick} />
          ))}
        </>
        {!this.state.inGame && <h1>Game Over</h1>}
        {this.state.won && <h1>You Won</h1>}
      </div>
    );
  }
}
