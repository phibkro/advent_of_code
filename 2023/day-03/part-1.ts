/* interface Position {
  x: number;
  y: number;
}
export function solution(txt: string): number {
  const lines = txt.split("\n");
  const numberPositions: Position[][] = [];
  for (let y = 0; y < lines.length; y++) {
    const line = lines[y];
    const positions: Position[] = [];
    for (let x = 0; x < line.length; x++) {
      if (line[x].match(/\d/)) {
        positions.push({ x, y });
      }
    }
    if (positions.length > 1) {
      numberPositions.push([positions[0], positions[positions.length - 1]]);
    }
  }

  const partNumberPositions = numberPositions.filter((positions) =>
    isPartNumber(positions[0], positions[1], lines)
  );

  const partNumbers: number[] = [];

  for (let y = 0; y < partNumberPositions.length; y++) {
    const numberStart = partNumberPositions[y][0];
    const numberEnd = partNumberPositions[y][1];
    const partNumber = lines[y].slice(numberStart.x, numberEnd.x + 1);
    console.log(partNumber);

    partNumbers.push(parseInt(partNumber));
  }
  console.log(partNumbers);

  return partNumbers.reduce((a, b) => a + b, 0);
}

function isPartNumber(
  startPosition: Position,
  endPosition: Position,
  matrix: string[]
): boolean {
  console.log(startPosition, endPosition);

  const boxToCheck = {
    firstCorner: {
      x: startPosition.x - 1 < 0 ? 0 : startPosition.x - 1,
      y: startPosition.y - 1 < 0 ? 0 : startPosition.y - 1,
    },
    secondCorner: {
      x:
        endPosition.x + 1 > matrix[0].length - 1
          ? matrix[0].length - 1
          : endPosition.x + 1,
      y:
        endPosition.y + 1 > matrix.length - 1
          ? matrix.length - 1
          : endPosition.y + 1,
    },
  };
  for (let y = boxToCheck.firstCorner.y; y <= boxToCheck.secondCorner.y; y++) {
    for (
      let x = boxToCheck.firstCorner.x;
      x <= boxToCheck.secondCorner.x;
      x++
    ) {
      if (matrix[y][x] !== "." && matrix[y][x].match(/\d/)) {
        return true;
      }
    }
  }
  return false;
}
 */

export function solution(txt: string) {
  const lines = txt.split("\n");
  for (let y = 0; y < lines.length; y++) {
    const letter = lines[y];
    if (letter.match(/\d/)) {
      const number = parseInt(letter);
      const nextNumber = parseInt(lines[y + 1]);
      if (nextNumber - number !== 1) {
        return number + 1;
      }
    }
  }
}
