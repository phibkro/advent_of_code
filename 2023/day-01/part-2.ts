import { assertEquals } from "std/assert/mod.ts";

const digitWords = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
} as const;
type DigitWord = keyof typeof digitWords;

function arraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

function parseCalibration(str: string): number {
  const matchDigit = "\\d";
  const matchDigitWords = "zero|one|two|three|four|five|six|seven|eight|nine";
  const wrapInPositiveLookahead = (v: string) => `(?=(${v}))`;
  const regexMatches = str.matchAll(
    new RegExp(matchDigit + "|" + wrapInPositiveLookahead(matchDigitWords), "g")
  );

  const digits = Array.from(regexMatches, (match) => {
    const value = match[0] ? match[0] : match[1];

    return value in digitWords
      ? digitWords[value as DigitWord].toString()
      : value;
  });

  const calibration = parseInt(digits[0] + digits[digits.length - 1], 10);
  return calibration;
}

function solution(textInput: string) {
  const lines = textInput.split("\n");
  return arraySum(lines.map(parseCalibration));
}

Deno.test("Example input", () => {
  const exampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
  assertEquals(solution(exampleInput), 281);
});

Deno.test("Edge case", () => {
  const exampleInput = `oneight`;
  assertEquals(solution(exampleInput), 18);
});

Deno.test("Puzzle input", async () => {
  const puzzleInput = await Deno.readTextFile("2023/day-01/day-01.txt");
  assertEquals(solution(puzzleInput), 54100);
});
