//「ユーザー」クラスを定義する
export class User {
    
//コンストラクタを定義する
    constructor(
        //ユーザーIDを表すプロパティ
        public id: string,
        //ユーザー名を表すプロパティ
        public name: string,
        //ユーザーのメールアドレスを表すプロパティ
        public email: string,
        
    ){}

    //ユーザー情報を表示するメソッド
    displayinfo():void{

        //ユーザー情報を表示する
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
}