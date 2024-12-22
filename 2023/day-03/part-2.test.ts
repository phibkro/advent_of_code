import { assertEquals } from "std/assert/assert_equals.ts";
import { solution } from "./part-2.ts";

Deno.test("Example", () => {
  const input = ``;

  assertEquals(solution(input), 0);
});

Deno.test("Case", async () => {
  const file = await Deno.readTextFile("./2023/day-03/input.txt");

  // assertEquals(solution(file), ?);
  console.log(solution(file));
});