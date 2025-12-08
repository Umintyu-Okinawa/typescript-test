//配列の合計値を計算して表示する関数
export function Sum(array: number[]): void {
    
    //配列の合計値を計算して表示する
    console.log(array.reduce((a, b) => a + b, 0));
}

//配列の平均値を計算して表示する関数
export function Average(array: number[]): void {

    //配列の平均値を計算して表示する
    console.log(array.reduce((a, b) => a + b, 0) / array.length);
}


//配列の最大値を計算して表示する関数
export function Max(array: number[]): void {

    //配列の最大値を計算して表示する
    console.log(array.reduce((a, b) => Math.max(a, b), 0));
}

//配列の最小値を計算して表示する関数
export function Min(array: number[]): void {

    //配列の最小値を計算して表示する
    console.log(array.reduce((a, b) => Math.min(a, b), 0));

}

//配列の昇順を行う関数
export function AscendingSort(array: number[]): void {

    //配列の昇順を行う
    console.log(array.sort((a, b) => a - b));
}

//配列の降順を行う関数
export function DescendingSort(array: number[]): void {

    //配列の降順を行う
    console.log(array.sort((a, b) => b - a));
}

