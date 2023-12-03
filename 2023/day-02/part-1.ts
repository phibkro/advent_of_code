export interface Move {
  [x: string]: number;
}
export interface Game {
  id: number;
  gameHistory: Move[][];
}

/* 
  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green 
*/

export function solution(txt: string, bag: Move): number {
  const games = convert(txt);
  const validGames = games.filter((game) => isGameValid(game, bag));

  return validGames.reduce((a, b) => a + b.id, 0);
}

export function convert(txt: string): Game[] {
  const lines = txt.split("\n");
  return lines.map(lineToGame);
}

export function lineToGame(line: string): Game {
  const [header, body] = line.split(":");
  const gameId = parseInt(header.trim().split(" ")[1]);

  const gameMoves = body
    .split(";")
    .map((bag) => bag.split(",").map((cube) => cube.trim().split(" ")));

  const gameHistory = gameMoves.map((moves) => {
    return moves.map((move) => {
      const [number, color] = move;
      return {
        [color]: parseInt(number),
      };
    });
  });

  return {
    id: gameId,
    gameHistory,
  };
}

function isMoveValid(move: Move, bag: Move): boolean {
  return Object.entries(move).every(([color, number]) => {
    return bag[color] >= number;
  });
}

function isGameValid(game: Game, bag: Move): boolean {
  return game.gameHistory.every((moveCollection) =>
    moveCollection.every((m) => isMoveValid(m, bag))
  );
}
