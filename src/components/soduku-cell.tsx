import clsx from "clsx";

export default function SudokuCell({
  row,
  col,
  value,
  cellChanged,
  noSolution,
}: {
  row: number;
  col: number;
  value: number;
  cellChanged(data: string, row: number, col: number): void;
  noSolution: boolean;
}) {
  return (
    <input
      className={clsx("cell", noSolution && "error")}
      key={`${row}/${col}`}
      type="text"
      inputMode="numeric"
      pattern="[0-9]"
      maxLength={1}
      value={value == 0 ? "" : value}
      onChange={(e) => cellChanged(e.target.value, row, col)}
    />
  );
}
