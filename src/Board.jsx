import { Square } from "./Square";
import { useGameStore } from "./store";

export default function Board() {
  const [squares, setSquares] = useGameStore((state) => [
    state.squares,
    state.setSquares,
  ]);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      {squares.map((square, squareIndex) => {
        <Square
          key={squareIndex}
          value={square}
          onSquareClick={() => handleClick(squareIndex)}
        />;
      })}
    </div>
  );
}
