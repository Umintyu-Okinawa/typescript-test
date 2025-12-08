//「Book」クラスを定義する
export class Book {
    //コンストラクタを定義する
    constructor(
        //プロパティを定義する
        public title: string, 
        //著者名を表すプロパティ
        public author: string, 
        //在庫数を表すプロパティ
        public stock: number){}


            //図書の情報を表示するメソッド
            displayinfo():void{

             console.log( `${this.title}  ${this.author}  ${this.stock} ` );
            }

            //図書を「貸出」するメソッド
            borrowBook():void{

             //在庫が1以上の場合   
            if(this.stock >= 1){

                //在庫が1以上の場合の処理
                console.log("${this.title}を貸出しました。")

                //在庫が0の場合
            }else if(this.stock === 0) {

                //在庫が0の場合の処理
                 console.log("${this.title}は在庫切れ。")


            }
        }
}
        //情報を表示するメソッドを定義する
        
    
  


