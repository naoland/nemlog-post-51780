# 簡単プログラミング！BTCの複数取引所の現在価格を表示しよう（Node.js編）

## はじめに

みなさん、こんにちは。

今回は複数の取引所の、現在のBTCの価格を表示してみます。

3つの取引所（Zaif、Bitflyer、BitBank）からBTC/JPY通貨ペアのティッカー情報を取得し、それぞれの現在価格をコンソールに表示します。
今回も動作確認はGitpodを使用します。

先に、動作結果だけお見せすると、コンソールで次のように表示されます。
取引所毎の取得結果は、プログラムを開始して終わったものから表示されるので、表示順序は毎回変わる場合もあります。
今回の組み合わせでは、常にbitbankが早く処理を終えるようです。

いずれかの取引所でティッカー情報を取得中に問題が発生した場合は、途中で処理が終了し、その原因となるエラーメッセージが表示されます。

```
nao@330:~/tmp/nemlog-post-51780$ node index.js 
複数の取引所からBTCの現在価格を取得します。10秒間内に取得できないとタイムアウトエラーが発生します。取得が終わった順に表示されます。
bitbank BTC 現在価格: 2332669 JPY
bitflyer BTC 現在価格: 2330000 JPY
zaif2 BTC 現在価格: 2328500 JPY
zaif BTC 現在価格: 2328500 JPY
```

## 一連の捜査を動画で見てください


## プログラムの実行




## プログラムの説明



## まとめ

複数の取引所からBTCの現在価格を取得して表示する例を紹介しました。
ポイントは、


## 関連情報へのリンク

- [簡単プログラミング！BTCの複数取引所の現在価格を表示しよう](https://github.com/naoland/nemlog-post-51408)
- [非同期関数 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [try...catch 文 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Exception_Handling_Statements/try...catch_Statement)

