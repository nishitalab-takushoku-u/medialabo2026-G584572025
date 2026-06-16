// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let x=0;
let i=document.querySelector('p#result'); 
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu=kaisu+1;
  let p=document.querySelector('span#kaisu'); 
  p.textContent=kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso=document.querySelector('input[name="yosou"]');
  x=Number(yoso.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(kaisu<=3){
    if(x===kotae){
      let seikai='正解です．おめでとう!';
      i.textContent=seikai;
    }else if(x<=kotae){
      let matigai1='まちがい．答えはもっと大きいですよ';
      i.textContent=matigai1;
    }else{
      let matigai2='まちがい．答えはもっと小さいですよ';
      i.textContent=matigai2;
    }
  }else if(kaisu===4){
    let matigai='まちがい．残念でした答えは'+kotae+'です.';
    i.textContent=matigai;
  }else{
    let zyougen='答えは'+kotae+'でした．すでにゲームは終わっています';
    i.textContent=zyougen;
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b=document.querySelector('button#kaitou');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
