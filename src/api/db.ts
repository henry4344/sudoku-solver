const SODUKU_API_ENDPOINT = "http://localhost:8010/proxy";

export async function lookupSolution(sudokuString: string) {
  // curl -H 'Content-Type: application/json' -X POST -d '{"sudoku":["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]}' http://127.0.0.1:5000
  const lookup = await fetch(SODUKU_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sudoku: [sudokuString] }),
  });
  const res = await lookup.json();
  return res;
}
