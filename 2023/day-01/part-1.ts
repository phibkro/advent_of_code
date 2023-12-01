function arraySum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
function parseCalibration(str: string): number {
  const regexDigit = /\d/g;
  const digits = str.matchAll(regexDigit);

  const digitsArray: string[] = [];
  for (const digit of digits) {
    digitsArray.push(digit[0]);
    console.log(digit[0]);
  }
  return parseInt(digitsArray[0] + digitsArray[digitsArray.length - 1], 10);
}
async function solution() {
  const txt = await Deno.readTextFile("./2023/day-01.txt");
  const lines = txt.split("\n");
  return arraySum(lines.map(parseCalibration));
}

console.log(await solution());
