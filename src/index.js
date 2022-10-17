import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";


const Square = (props) => {
  const [value, setValue] = useState(null);
  return (
    <button className="square" 
    onClick={props.onClickEvent}
    >

      {props.value}
    </button>
  )
}

const Board = () => {
  const initialSquares = [
    null,null,null,
    null,null,null,
    null,null,null,
  ];
  const [squares, setSquares] =   useState(initialSquares)


  const handleClickEvent= (i) =>{
    alert(`square ${i} clicked`)
  };
  const renderSquare = (i) =>{
    return(
      <Square value={squares[i]}
      onClickEvent={() => handleClickEvent(i)}
      />
    )
  }
  return (
    <div style={{
      backgroundColor: "skyblue",
      margin: 10,
      padding: 20
    }
    }>
      Board
      <div className="board-row">
      {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
      {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  )
}


const gameStyles = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20,
};
const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById('root'))