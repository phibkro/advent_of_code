import { assertEquals } from "std/assert/mod.ts";

function arraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
function parseCalibration(str: string): number {
  const regexDigit = /\d/g;
  const digits = str.matchAll(regexDigit);

  const digitsArray: string[] = [];
  for (const digit of digits) {
    digitsArray.push(digit[0]);
    console.log(digit[0]);
  }
  return parseInt(digitsArray[0] + digitsArray[digitsArray.length - 1], 10);
}
function solution(txt: string) {
  const lines = txt.split("\n");
  return arraySum(lines.map(parseCalibration));
}

Deno.test("Example input", () => {
  const exampleInput = `1abc2
  pqr3stu8vwx
  a1b2c3d4e5f
  treb7uchet`;
  assertEquals(solution(exampleInput), 142);
});

Deno.test("Puzzle input", async () => {
  const puzzleInput = await Deno.readTextFile("2023/day-01/day-01.txt");
  assertEquals(solution(puzzleInput), 54877);
});
