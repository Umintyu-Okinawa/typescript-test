//購入処理を行う「processPurchase()」を作成する
export function processPurchase(userId, productId, products) {
    //指定された商品の在庫を確認し、在庫がある場合は在庫を減らし、購入完了のメッセージを表示する。在庫がない場合は、在庫不足のメッセージを表示する。
    const product = products.find((p) => p.id === productId);
    //商品の在庫がある場合
    if (product && product.stock > 0) {
        //商品の在庫を減らす
        product.stock--;
        //購入完了のメッセージを表示する
        console.log(`${product.name}を${userId}さんが購入しました。`);
    }
    else {
        //商品の在庫がない場合
        console.log(`${productId}は在庫切れです。`);
    }
}
