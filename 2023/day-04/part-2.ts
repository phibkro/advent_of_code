class ScratchCard {
  constructor(
    private id: number,
    private winningNumbers: number[],
    private numbers: number[]
  ) {
    this.id = id;
    this.winningNumbers = winningNumbers;
    this.numbers = numbers;
  }
  public parseCard(txt: string): ScratchCard {
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
    return new ScratchCard(value, numbers, winningNumbers);
  }
  public getWinningNumbers(): number[] {
    return this.numbers.filter((number) =>
      this.winningNumbers.includes(number)
    );
  }
}
export function solution(txt: string): number {
  const lines = txt.split("\n").map((line) => line.trim());
  const cards = lines.map((line) => ScratchCard.prototype.parseCard(line));
  return cards.length;
}
