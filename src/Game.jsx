import Board from "./Board";
import { useGameStore } from "./store";

export default function Game() {
  const { history, xIsNext, setHistory, setXIsNext } = useGameStore();
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory(history.concat([nextSquares]));
    setXIsNext(!xIsNext);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
