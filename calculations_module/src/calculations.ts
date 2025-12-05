//加算関数（add）：2つの数値を引数として受け取り、その和を返す
const add = (a: number, b: number): number => {
    return a + b;
};

//減算関数（subtract）：2つの数値を引数として受け取り、その差を返す
const subtract = (a: number, b: number): number => {
    return a - b;
};

//乗算関数（multiply）：2つの数値を引数として受け取り、その積を返す
const multiply = (a: number, b: number): number => {
    return a * b;
};

//2つの数値を引数として受け取り、第二引数が0でない場合はその商を返す。第二引数が0の場合は、エラーメッセージを返す
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("0で割ることはできません");
    }
    return a / b;
};
  
console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));