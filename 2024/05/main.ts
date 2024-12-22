import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
    const file = Deno.readTextFileSync("./input.txt");
    console.log(part1(file));
    // console.log(part2(file));
}

Deno.test("Part1: Example", () => {
    const input: string = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;
    const answer: number = 143;
    assertEquals(part1(input), answer);
});

function part1(txt: string): number {
    const lines = txt.trim().split("\n");
    const rules: Array<Array<string>> = [];
    for (let i = 0; lines[i].trim() !== ""; i++) {
        rules.push(lines[i].split("|"));
    }
    const updates: Array<Array<string>> = [];
    for (let i = 0; lines[i].trim() !== ""; i++) {
        updates.push(lines[i].split(","));
    }
}
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
