import { assertEquals } from "std/assert/assert_equals.ts";
import { solution } from "./part-1.ts";

Deno.test("Example", () => {
  const input = `467..114..
  ...*......
  ..35..633.
  ......#...
  617*......
  .....+.58.
  ..592.....
  ......755.
  ...$.*....
  .664.598..
  `;

  assertEquals(solution(input), 4361);
});

/* Deno.test("Case", async () => {
  const file = await Deno.readTextFile("./2023/day-03/input.txt");

  // assertEquals(solution(file), ?);
  console.log(solution(file));
}); */
