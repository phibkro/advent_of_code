import { assertEquals } from "std/assert/mod.ts";
import { solution } from "./part-2.ts";

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
