export const convertSudStringToNumMatrix = (dataString: string): number[][] => {
  const groups: string[][] = [];
  const data = dataString.split(".").join("0");

  for (let i = 0; i < data.length; i++) {
    i % 9 == 0 ? groups.push(data.slice(i, 9 + i).split("")) : null;
  }
  const newSudoku: number[][] = groups.map((line) =>
    line.map((num) => Number(num))
  );
  return newSudoku;
};

export const convertNumMatrixToSudString = (matrix: number[][]): string => {
  //   let outputString = "";

  const outputString = matrix.map((line) => line.join("")).join("");
  return outputString;

  //   outputString.split("0").join(".");

  //   return outputString;
};
