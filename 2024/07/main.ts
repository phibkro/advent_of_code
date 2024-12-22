import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
	const file = Deno.readTextFileSync("./input.txt");
	console.log(part1(file));
	// console.log(part2(file));
}

Deno.test("Part1: Example", () => {
	const input: string = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;
	const answer: number = 3749; 
	assertEquals(part1(input), answer);
});

function part1(txt: string): number {}
/* 
Deno.test({
	name: "Part1: Solution",
	permissions: { read: true },
	fn: () => {
		const file = Deno.readTextFileSync("./input.txt");
		const answer: number;
		assertEquals(part1(file), answer);
	},
});
 */
/* 
Deno.test("Part2: Example", () => {
	const input: string;
	const answer: number;
	assertEquals(part2(input), answer);
});

function part2(txt: string): number {}

Deno.test({
	name: "Part2: Solution",
	permissions: { read: true },
	fn: () => {
		const file = Deno.readTextFileSync("./input.txt");
		const answer: number;
		assertEquals(part2(file), answer);
	},
});
 */