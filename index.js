//現在時刻取得
var dt = new Date();
//年を抽出
var year = dt.getFullYear();
//月を抽出
var month = dt.getMonth()+1;
//曜日を抽出
var day = dt.getDay();
//日にち
var date = dt.getDate();
var firstDate = new Date(year,month-1,1);
var firstDay= firstDate.getDay();
var dayarray=[];
var lastdate = new Date( year, month, 0);
var lastDate = lastdate.getDate();
console.log(firstDay);
console.log(lastDate)

for(let i = 1; i<=42 ; i++){
if(i<=firstDay){
    dayarray.push(" ");
}
else if(i<=firstDay+lastDate){
    dayarray.push(i-firstDay);
}
else{
    dayarray.push(" ");
};
};
console.log(dayarray)

