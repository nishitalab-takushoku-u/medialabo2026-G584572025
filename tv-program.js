
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let x=0;
  for(let n of data.list.g1){
    x=x+1;
    console.log('検索結果'+x+'件目');
    console.log('・開始時刻：'+n.start_time);
    console.log('・終了時刻:'+n.end_time);
    console.log('・チャンネル:'+n.service.name);
    console.log('・タイトル:'+n.title);
    console.log('・サブタイトル:'+n.subtitle);
    console.log('・番組説明:'+n.content);
    console.log('・出演者:'+n.act);
    console.log('-------------------------------');
  }
}
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let y=document.querySelector('div#result')
  if(y){
    y.remove();
  }
  let u=document.createElement('div');
  u.setAttribute('id','result');
  let a=document.querySelector('body');
  let x=0;
  let q=data.list;
  if(q=data.list.g1){
    for(let n of data.list.g1){ 
      x=x+1;
      let h=document.createElement('h2');
      h.textContent='検索結果'+x+'件目';
      u.insertAdjacentElement('beforeend',h);
      let l=document.createElement('li');
      l.textContent='開始時刻：'+n.start_time;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='終了時刻:'+n.end_time;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='チャンネル:'+n.service.name;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='タイトル:'+n.title;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='サブタイトル:'+n.subtitle;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='番組説明:'+n.content;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='出演者:'+n.act;
      u.insertAdjacentElement('beforeend',l);
    }
  }else{
    for(let n of data.list.e1){ 
      x=x+1;
      let h=document.createElement('h2');
      h.textContent='検索結果'+x+'件目';
      u.insertAdjacentElement('beforeend',h);
      let l=document.createElement('li');
      l.textContent='開始時刻：'+n.start_time;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='終了時刻:'+n.end_time;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='チャンネル:'+n.service.name;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='タイトル:'+n.title;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='サブタイトル:'+n.subtitle;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='番組説明:'+n.content;
      u.insertAdjacentElement('beforeend',l);
      l=document.createElement('li');
      l.textContent='出演者:'+n.act;
      u.insertAdjacentElement('beforeend',l);
    }
  }
  a.insertAdjacentElement('afterend', u); 
}
// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let s = document.querySelector('select#s');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  
  s = document.querySelector('select#g');
  idx = s.selectedIndex;

  os = s.querySelectorAll('option');
  let p = os.item(idx);


  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+o.getAttribute('value')+'-'+p.getAttribute('value')+'-j.json';

  axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  console.log(data);

  console.log(data.x);

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
