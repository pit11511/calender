//現在時刻取得
var dt = new Date();

//年を抽出
var year = dt.getFullYear();
//月を抽出
var month = dt.getMonth()+1;
//曜日を抽出
var date = dt.getDate()+1;
//日付を抽出
var day = dt.getDay();

var firstDate = 6 - (day % 7);
console.log(firstDate);