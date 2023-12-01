import { assertEquals } from "std/assert/assert_equals.ts";
import { solution } from "./part-1.ts";

Deno.test("Example input", () => {
  const exampleInput = `1abc2
  pqr3stu8vwx
  a1b2c3d4e5f
  treb7uchet`;
  assertEquals(solution(exampleInput), 142);
});

Deno.test("Puzzle input", async () => {
  const file = await Deno.readTextFile("2023/day-01/day-01.txt");
  assertEquals(solution(file), 54877);
});
