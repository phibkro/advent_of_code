export interface ScratchCard {
  id: number;
  numbers: number[];
  winningNumbers: number[];
}
export function findWinningNumbers(
  numbers: number[],
  winningNumbers: number[]
): number[] {
  return numbers.filter((number) => winningNumbers.includes(number));
}
export function parseCard(txt: string): ScratchCard {
  const [header, body] = txt.split(":").map((txt) => txt.trim());
  const [_label, valueAsString] = header.split(" ").map((txt) => txt.trim());
  const value = parseInt(valueAsString, 10);

  const [winningNumbers, numbers] = body.split("|").map((txt) =>
    txt
      .trim()
      .split(" ")
      .filter((txt) => txt.trim() !== "")
      .map((txt) => {
        return parseInt(txt.trim());
      })
  );

  return {
    id: value,
    numbers,
    winningNumbers,
  };
}
export function solution(txt: string): number {
  const lines = txt.split("\n").map((line) => line.trim());
  const scratchCards = lines.map(parseCard);

  console.log(scratchCards);

  const scratchCardsWinningNumbers = scratchCards
    .map((card) => findWinningNumbers(card.numbers, card.winningNumbers))
    .filter((v) => v.length);
  const scratchCardsPoints = scratchCardsWinningNumbers.map(
    (v) => 2 ** (v.length - 1)
  );

  return scratchCardsPoints.reduce((a, b) => a + b, 0);
}
