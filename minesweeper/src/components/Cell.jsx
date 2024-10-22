import React from "react";

export default function Cell(props) {
  const showCell = (index) => {
    if (!props.cell.visible) {
      props.onClick(index);
    }
  };

  return (
    <>
      <p className="cell" onClick={() => showCell(props.cell.index)}>
        {props.cell.visible ? props.cell.numberOfNeighbouringMines : ""}
      </p>
    </>
  );
}
