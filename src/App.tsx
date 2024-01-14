import { useState } from "react";
import "./App.css";
import SudokuCell from "./components/soduku-cell";
import Button from "./components/buttons";
import { sodukuData } from "./lib/data";
import {
  convertNumMatrixToSudString,
  convertSudStringToNumMatrix,
} from "./lib/actions";
import { lookupSolution } from "./api/db";

const SUDOKU_GRID: number[][] = Array.from(Array(9), () => Array(9).fill(0));
function App() {
  const [cells, setCells] = useState<number[][]>(SUDOKU_GRID);
  const [noSolution, setNoSolution] = useState(false);

  const cellChanged = (newVal: string, row: number, col: number) => {
    const newNumber = +newVal;
    const copy = [...cells];
    copy[row][col] = newNumber;
    return setCells(copy);
  };

  const loadSoduku = (): void => {
    const newSudoku = convertSudStringToNumMatrix(sodukuData[1]);
    setCells(newSudoku);
    setNoSolution(false);
  };

  const clearSudoku = (): void => {
    setCells(SUDOKU_GRID);
    setNoSolution(false);
  };

  const solveSoduku = async (): Promise<void> => {
    const outputString = convertNumMatrixToSudString(cells);
    const lookup = await lookupSolution(outputString);
    if (lookup.data[0].status == "OK") {
      const solution = lookup.data[0].solution;
      return setCells(convertSudStringToNumMatrix(solution));
    }

    if (lookup.data[0].status == "Error") {
      return setNoSolution(true);
    }
  };

  return (
    <>
      <div className="soduku-grid">
        {cells.map((row, rowIndex) => (
          <div className="sudoku-line" key={rowIndex}>
            {row.map((number, colIndex) => (
              <SudokuCell
                key={`${rowIndex + 1 * colIndex}`}
                row={rowIndex}
                col={colIndex}
                value={number}
                cellChanged={cellChanged}
                noSolution={noSolution}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="buttons">
        <Button func={loadSoduku} title="Load" />
        <Button func={solveSoduku} title="Solve" />
        <Button func={clearSudoku} title="Clear" />
      </div>
    </>
  );
}

export default App;
