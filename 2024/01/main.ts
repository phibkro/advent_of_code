import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
	const file = Deno.readTextFileSync("./input.txt");
	console.log(part2(file));
}

function parse(txt: string): Set<Array<number>> {
	// Parse input to 2 lists
	const lines = txt.split("\n").filter((line) => line.trim() !== "");
	// console.log(lines);
	const firstList: Array<number> = [];
	const secondList: Array<number> = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const args = line
			.split(" ")
			.map((str) => str.trim())
			.filter((str) => str !== "");
		// console.log(args);

		const first = args[0];
		const second = args[1];

		const firstNum = Number(first);
		if (Number.isNaN(firstNum))
			throw new Error(`Line: ${i + 1} First not a number`);
		firstList.push(firstNum);

		const secondNum = Number(second);
		if (Number.isNaN(secondNum))
			throw new Error(`Line: ${i + 1} Second not a number`);
		secondList.push(secondNum);
	}
	if (firstList.length !== secondList.length)
		throw new Error("List lengths inequal");

	return new Set([firstList, secondList]);
}

function part1(txt: string): number {
	const [firstList, secondList] = parse(txt);
	// Sort the lists
	const sortedFirstList = firstList.toSorted((a, b) => a - b);
	const sortedSecondList = secondList.toSorted((a, b) => a - b);
	// Find the difference of each nth smallest number in the lists
	const differences: Array<number> = [];
	for (let i = 0; i < sortedFirstList.length; i++) {
		// console.log(sortedFirstList[i]);
		// console.log(sortedSecondList[i]);

		differences.push(Math.abs(sortedFirstList[i] - sortedSecondList[i]));
	}
	// console.log(differences);

	// Reduce to the sum
	return differences.reduce((prev, curr) => prev + curr);
}
function part2(txt: string): number {
	const [firstList, secondList] = parse(txt);
	const counts: Record<string, number> = {};
	for (let i = 0; i < secondList.length; i++) {
		const item = secondList[i];
		if (!counts[item]) {
			counts[item] = 1;
		} else {
			counts[secondList[i]] += 1;
		}
	}

	const similarities: Array<number> = [];
	for (let i = 0; i < firstList.length; i++) {
		const item = firstList[i];
		if (counts[item]) {
			similarities.push(item * counts[item]);
		}
	}

	// Reduce to the sum
	return similarities.reduce((prev, curr) => prev + curr);
}

Deno.test("Part1: Example", () => {
	const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
	assertEquals(part1(input), 11);
});

Deno.test({
	name: "Part1: Solution",
	permissions: { read: true },
	fn: () => {
		const file = Deno.readTextFileSync("./input.txt");

		assertEquals(part1(file), 2742123);
	},
});

Deno.test("Part2: Example", () => {
	const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
	const answer = 31;
	assertEquals(part2(input), answer);
});

Deno.test({
	name: "Part2: Solution",
	permissions: { read: true },
	fn: () => {
		const file = Deno.readTextFileSync("./input.txt");
		const answer = 21328497;
		assertEquals(part2(file), answer);
	},
});
