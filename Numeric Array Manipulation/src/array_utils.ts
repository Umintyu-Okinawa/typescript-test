// 合計値を返す
function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

// 最大値を返す
function max(array: number[]): number {
  return array.reduce((a, b) => Math.max(a, b));
}

// 最小値を返す
function min(array: number[]): number {
  return array.reduce((a, b) => Math.min(a, b));
}


// 合計値を表示
export function Sum(array: number[]): void {
  console.log(sum(array));
}

// 平均値を表示
export function Average(array: number[]): void {
  console.log(sum(array) / array.length);
}

// 最大値を表示
export function Max(array: number[]): void {
  console.log(max(array));
}

// 最小値を表示
export function Min(array: number[]): void {
  console.log(min(array));
}

// 昇順ソート
export function AscendingSort(array: number[]): void {
  console.log([...array].sort((a, b) => a - b));
}

// 降順ソート
export function DescendingSort(array: number[]): void {
  console.log([...array].sort((a, b) => b - a));
}
