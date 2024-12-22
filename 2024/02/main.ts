import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
	const file = Deno.readTextFileSync("./input.txt");
	console.log(part1(file));
	console.log(part2(file));
}

function parse(txt: string) {
	const lines = txt.split("\n").filter((line) => line.trim() !== "");
	const numberArrays = lines.map((line) =>
		line.split(" ").map((word) => Number(word)),
	);
	numberArrays.forEach((val) => {
		if (Number.isNaN(val)) throw new Error("No num");
	});
	return numberArrays;
}

function validateReport(report: Array<number>): boolean {
	let direction: "asc" | "desc" | null = null;
	for (let i = 1; i < report.length; i++) {
		const prev = report[i - 1];
		const curr = report[i];
		const diff = curr - prev;
		if (Math.abs(diff) > 3) return false;
		if (diff === 0) return false;
		if (diff < 0) {
			if (direction === "asc") return false;
			if (!direction) direction = "desc";
		}
		if (diff > 0) {
			if (direction === "desc") return false;
			if (!direction) direction = "asc";
		}
	}
	return true;
}

function part1(txt: string): number {
	const reports = parse(txt);
	let safeReports = 0;
	for (const report of reports) {
		if (validateReport(report)) {
			safeReports++;
		}
	}
	return safeReports;
}

Deno.test("Part1: Example", () => {
	const input: string = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
	const answer: number = 2;
	assertEquals(part1(input), answer);
});

Deno.test({
	name: "Part1: Solution",
	permissions: { read: true },
	fn: () => {
		const file = Deno.readTextFileSync("./input.txt");
		const answer: number = 246;
		assertEquals(part1(file), answer);
	},
});

function countViolations(report: Array<number>): number {
	let violations = 0;
	let direction: "asc" | "desc" | null = null;
	for (let i = 1; i < report.length; i++) {
		const prev = report[i - 1];
		const curr = report[i];
		const diff = curr - prev;
		if (Math.abs(diff) > 3) violations++;
		if (diff === 0) violations++;
		if (diff < 0) {
			if (direction === "asc") violations++;
			if (!direction) direction = "desc";
		}
		if (diff > 0) {
			if (direction === "desc") violations++;
			if (!direction) direction = "asc";
		}
	}
	return violations;
}

function part2(txt: string): number {
	const reports = parse(txt);
	let safeReports = 0;
	for (const report of reports) {
		if (countViolations(report) <= 1) {
			safeReports++;
		}
	}
	return safeReports;
}

Deno.test("Part2: Example", () => {
	const input: string = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
	const answer: number = 4;
	assertEquals(part2(input), answer);
});
/*
Deno.test({
	name: "Part2: Solution",
	permissions: { read: true },
	fn: () => {
		throw new Error("Not implemented");
		const file = Deno.readTextFileSync("./input.txt");
		const answer: number;
		assertEquals(part2(file), answer);
	},
});
*/
