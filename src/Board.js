import React from "react";
import "./index.css";

import Square from "./Square";

class Board extends React.Component {
  rowSize = 3;
  columnSize = 3;

  isWinnerSquare = index => {
    return this.props.winnerCombo
      ? this.props.winnerCombo.includes(index)
      : false;
  };

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        isHighlight={this.props.currenSquare === i}
        isWinner={this.isWinnerSquare(i)}
        onClick={() => this.props.onClick(i)}
        key={i.toString()}
      />
    );
  }

  createBoard = (columnsNum, rowsNum) => {
    let rows = [];

    for (let i = 0; i < rowsNum; i++) {
      let columns = [];

      for (let j = 0; j < columnsNum; j++) {
        let square = this.renderSquare(j + columnsNum * i);
        columns.push(square);
      }
      rows.push(
        <div className="board-row" key={`row ${i}`}>
          {columns}
        </div>
      );
    }
    return rows;
  };

  render() {
    return <div>{this.createBoard(this.columnSize, this.rowSize)}</div>;
  }
}

export default Board;
