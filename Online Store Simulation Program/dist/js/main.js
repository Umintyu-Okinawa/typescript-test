//商品モジュールをインポートする
import { Product } from "./product.js";
//購入モジュールをインポートする
import { processPurchase } from "./purcharse.js";
//ユーザーモジュールをインポートする
import { User } from "./user.js";
//商品情報とユーザー情報を作成する
const product1 = new Product("1", "商品1", 100, 10);
const user1 = new User("1", "ユーザー1", "user1@example.com");
//ユーザーによる購入をシュミレートして、processPurchase()関数を呼び出す
processPurchase(user1.id, product1.id, [product1]);
//購入処理の結果をコンソールする
console.log("購入処理の結果:${product1.stock}");
