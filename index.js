// 厳しく文法チェックします
'use strict';

// ライブラリを利用可能にします
const ccxt = require('ccxt');

// メイン関数 一番最初にコールされます。
(function () {
    console.log('複数の取引所からBTCの現在価格を取得します。10秒間内に取得できないとタイムアウトエラーが発生します。取得が終わった順に表示されます。');

    try {
        zaif();
        bitflyer();
        bitbank();
        zaif2();
    } catch (e) {
        // 何らかのエラーが発生した場合は、以下のコードが実行されます

        // エラー内容をそのまま表示
        console.log(e.message);
    }
})();

async function zaif() {
    try {
        // zaif apiの機能を使えるようにします
        const zaif = new ccxt.zaif();
        // 通貨ペアを指定します
        const pair = 'BTC/JPY';
        // ティッカー情報を同期処理として取得します
        const ticker = await zaif.fetchTicker(pair);
        // ティッカー情報の中から現在価格を表示します
        console.log(`zaif BTC 現在価格: ${ticker['last']} JPY`);
    } catch (e) {
        // 何らかのエラーが発生した場合は、以下のコードが実行されます

        // エラー内容をそのまま表示
        console.log(e.message);
    }
};

async function bitflyer() {
    try {
        // bitflyer apiの機能を使えるようにします
        const bitflyer = new ccxt.bitflyer();
        // 通貨ペアを指定します
        const pair = 'BTC/JPY';
        // ティッカー情報を同期処理として取得します
        const ticker = await bitflyer.fetchTicker(pair);
        // ティッカー情報の中から現在価格を表示します
        console.log(`bitflyer BTC 現在価格: ${ticker['last']} JPY`);
    } catch (e) {
        // 何らかのエラーが発生した場合は、以下のコードが実行されます

        // エラー内容をそのまま表示
        console.log(e.message);
    }
};

async function bitbank() {
    try {
        // bitflyer apiの機能を使えるようにします
        const bitbank = new ccxt.bitbank();
        // 通貨ペアを指定します
        const pair = 'BTC/JPY';
        // ティッカー情報を同期処理として取得します
        const ticker = await bitbank.fetchTicker(pair);
        // ティッカー情報の中から現在価格を表示します
        console.log(`bitbank BTC 現在価格: ${ticker['last']} JPY`);
    } catch (e) {
        // 何らかのエラーが発生した場合は、以下のコードが実行されます

        // エラー内容をそのまま表示
        console.log(e.message);
    }
}

// 例外が発生しても、この関数内では何もしません。上位の例外処理に任せます。
async function zaif2() {
    // zaif apiの機能を使えるようにします
    const zaif = new ccxt.zaif();
    // 通貨ペアを指定します
    const pair = 'BTC/JPY';
    // ティッカー情報を同期処理として取得します
    const ticker = await zaif.fetchTicker(pair);
    // ティッカー情報の中から現在価格を表示します
    console.log(`zaif2 BTC 現在価格: ${ticker['last']} JPY`);
};
