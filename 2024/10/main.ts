import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
	const file = Deno.readTextFileSync("./input.txt");
	console.log(part1(file));
	// console.log(part2(file));
}

Deno.test("Part1: Example", () => {
	const input: string = `0123
1234
8765
9876
`;
	const answer: number = 36; 
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