import { solution } from "./part-1.ts";

Deno.bench("Benchmark", async (b) => {
  const file = await Deno.readTextFile("2023/day-01/day-01.txt");
  b.start();
  solution(file);
  b.end();
});
