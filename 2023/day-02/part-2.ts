/* 
  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green 
*/

import { convert } from "./part-1.ts";
import type { Game, Move } from "./part-1.ts";

export function solution(txt: string): number {
  const games = convert(txt);
  const minimumCubeSets = games.map(calculateMinimumCubeSet);
  console.log(minimumCubeSets);

  const cubePowers = minimumCubeSets.map(
    (cubeSet) => cubeSet.red * cubeSet.green * cubeSet.blue
  );

  const cubePowersSum = cubePowers.reduce((a, b) => a + b, 0);

  return cubePowersSum;
}

function calculateMinimumCubeSet(game: Game): Move {
  const minimumCubes = {
    red: 0,
    green: 0,
    blue: 0,
  };
  for (const moveCollection of game.gameHistory) {
    for (const move of moveCollection) {
      for (const [color, number] of Object.entries(move)) {
        // @ts-ignore
        if (minimumCubes[color] < number) {
          // @ts-ignore
          minimumCubes[color] = number;
        }
      }
    }
  }
  return minimumCubes;
}
