import React, { useState } from "react";

export default function Cell(props) {
  const [visible, setVisible] = useState(false)

  const showCell = (index) => {
    if (props.cell[index].visible === false) {
      setVisible(true)
      props.onClick(visible, index)
      console.log('1 in showCell in Cell.jsx', visible)
    }
    console.log('2 in showCell in Cell.jsx', visible)
    // Fixa så rätt visible och index skickas till onClick i Board.jsx
    // Bättre namn på parametrar
  }
  
  return(
    <>
      {props.cell.map((box, i) =>
        <p className="box" key={i} onClick={() => showCell(i)}>{props.cell[i].visible === false ? "" : props.cell[i].numberOfNeighbouringMines}</p>
      )}
    </>
  )
}