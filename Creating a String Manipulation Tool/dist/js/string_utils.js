//文字列の長さを表示する関数
export function Length(str) {
    //文字列の長さを表示する
    console.log(str.length);
}
//文字列を大文字に変換する関数
export function ToUpperCase(str) {
    //文字列を大文字に変換して表示する
    console.log(str.toUpperCase());
}
//文字列を小文字に変換する関数
export function ToLowerCase(str) {
    //文字列を小文字に変換して表示する
    console.log(str.toLowerCase());
}
//文字の出現回数の関数
export function Count(str, char) {
    //文字の出現回数を表示する
    console.log(str.split(char).length - 1);
}
