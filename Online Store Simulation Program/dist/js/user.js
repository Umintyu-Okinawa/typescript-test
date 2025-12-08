//「ユーザー」クラスを定義する
export class User {
    id;
    name;
    email;
    //コンストラクタを定義する
    constructor(
    //ユーザーIDを表すプロパティ
    id, 
    //ユーザー名を表すプロパティ
    name, 
    //ユーザーのメールアドレスを表すプロパティ
    email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    //ユーザー情報を表示するメソッド
    displayinfo() {
        //ユーザー情報を表示する
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
}
