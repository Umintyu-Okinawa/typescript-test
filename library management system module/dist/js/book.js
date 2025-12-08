//「Book」クラスを定義する
export class Book {
    title;
    author;
    stock;
    //コンストラクタを定義する
    constructor(
    //プロパティを定義する
    title, 
    //著者名を表すプロパティ
    author, 
    //在庫数を表すプロパティ
    stock) {
        this.title = title;
        this.author = author;
        this.stock = stock;
    }
    //図書の情報を表示するメソッド
    displayinfo() {
        console.log(`${this.title}  ${this.author}  ${this.stock} `);
    }
    //図書を「貸出」するメソッド
    borrowBook() {
        //在庫が1以上の場合   
        if (this.stock >= 1) {
            //在庫が1以上の場合の処理
            console.log("${this.title}を貸出しました。");
            //在庫が0の場合
        }
        else if (this.stock === 0) {
            //在庫が0の場合の処理
            console.log("${this.title}は在庫切れ。");
        }
    }
}
//情報を表示するメソッドを定義する
