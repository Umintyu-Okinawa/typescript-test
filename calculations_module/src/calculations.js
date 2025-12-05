"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
//加算関数（add）：2つの数値を引数として受け取り、その和を返す
var add = function (a, b) {
    return a + b;
};
exports.add = add;
//減算関数（subtract）：2つの数値を引数として受け取り、その差を返す
var subtract = function (a, b) {
    return a - b;
};
exports.subtract = subtract;
//乗算関数（multiply）：2つの数値を引数として受け取り、その積を返す
var multiply = function (a, b) {
    return a * b;
};
exports.multiply = multiply;
//2つの数値を引数として受け取り、第二引数が0でない場合はその商を返す。第二引数が0の場合は、エラーメッセージを返す
var divide = function (a, b) {
    if (b === 0) {
        throw new Error("0で割ることはできません");
    }
    return a / b;
};
exports.divide = divide;
console.log((0, exports.add)(1, 2));
console.log((0, exports.subtract)(1, 2));
console.log((0, exports.multiply)(1, 2));
console.log((0, exports.divide)(1, 2));
