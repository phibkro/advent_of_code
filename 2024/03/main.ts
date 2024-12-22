import { assertEquals } from "std/assert/assert_equals.ts";

if (import.meta.main) {
    const file = Deno.readTextFileSync("./input.txt");
    console.log(part1(file));
    // console.log(part2(file));
}

Deno.test("Part1: Example", () => {
    const input: string =
        "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const answer: number = 161;
    assertEquals(part1(input), answer);
});

type Token = {
    literal: string;
    operation: "mul" | null;
};
function tokenize(txt: string) {}
// mul(x, y)

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type First = Digit | ",";
type Second = Digit | ")";
const operationMultiply = "mul($$$,$$$)";

function part1(txt: string): number {
    txt = txt.trim();
    /* Parse */
    let p: number | null = null;
    for (let i = 0; i < txt.length; i++) {
        const c = txt[i];
        if (p === null) {
            if (c === "m") p = i;
            break;
        }
        const k = i - p;
        if (operationMultiply[k] === "$") {
            // c should be number or next character
        }
        if (operationMultiply[k] !== c) {
        }
        const sub = txt.substring(p, i + 1);
        if (sub === "m") {
            if (c !== "u") p = null;
            break;
        }
        if (sub === "mu") {
            if (c !== "l") p = null;
            break;
        }
    }
    /* Calculate sum */
    return -1;
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
