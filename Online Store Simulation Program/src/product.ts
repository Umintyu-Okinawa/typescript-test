//「商品」クラスを定義する
export class Product {

//コンストラクタを定義する
   constructor(

    //商品IDを表すプロパティ
    public id: string,

    //商品名を表すプロパティ
    public name: string,

    //価格を表すプロパティ
    public price: number,

    //在庫数を表すプロパティ
    public stock: number

){}

//商品情報を表示するメソッド
displayinfo():void{

    //商品情報を表示する
    console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}`);
}

//在庫数を減らすメソッド
decreaseStock():void{

    //在庫数を減らす
    if(this.stock > 0){
        this.stock--;
        //在庫数を減らしたことを表示する
        console.log("${this.name}の在庫を1減らしました。");
    }else{
        //在庫数が0の場合
        console.log("${this.name}は在庫切れ。");
    }
}



}




        
        
    
  


