/* 
Max of group
Puzzle input:
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000  
*/
function arraySplit<T>(arr: T[], splitCondition: T): T[][] {
  const result: T[][] = [];
  let group: T[] = [];
  for (const item of arr) {
    if (item === splitCondition) {
      result.push(group);
      group = [];
    } else {
      group.push(item);
    }
  }
  result.push(group);
  return result;
}

function arraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

const filePath = "./2022/day1.txt";
const input = await Deno.readTextFile(filePath);
const lines = input.split("\n");
const elves = arraySplit(lines, "");
const elvCalories = elves.map((inventory) =>
  arraySum(inventory.map((item) => parseInt(item, 10)))
);
const maxCalories = Math.max(...elvCalories);

console.log(maxCalories);

// 🌟

function maxN(arr: number[], n: number): number[] {
  return arr.sort((a, b) => b - a).slice(0, n);
}

const maxCaloriesTopThree = maxN(elvCalories, 3);

console.log(arraySum(maxCaloriesTopThree));

// 🌟🌟
