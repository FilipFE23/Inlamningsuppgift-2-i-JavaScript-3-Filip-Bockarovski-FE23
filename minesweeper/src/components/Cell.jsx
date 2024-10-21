import React from "react";

export default function Cell(props) {
  const showCell = (index) => {
    if (!props.cell[index].visible) {
      props.onClick(index);
    }
  };

  return (
    <>
      {props.cell.map((box, i) => (
        <p className="box" key={i} onClick={() => showCell(i)}>
          {box.visible ? box.numberOfNeighbouringMines : ""}
        </p>
      ))}
    </>
  );
}
