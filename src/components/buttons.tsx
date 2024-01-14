interface buttonProps {
  func(): void;
  title: string;
}

export default function Button({ func, title }: buttonProps) {
  return <button onClick={func}>{title}</button>;
}

// export function ClearButton({ func }: buttonProps) {
//   return <button onClick={func}>Clear</button>;
// }

// export function LoadButton({ func }: buttonProps) {
//   return <button onClick={() => loadSoduku()}>Load</button>;
// }

export function SolveButton({ func }: buttonProps) {
  return (
    <button onClick={func} type="submit">
      Solve
    </button>
  );
}
