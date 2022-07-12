//現在時刻取得
var dt = new Date();
//年を抽出
var year = dt.getFullYear();
//月を抽出
var month = dt.getMonth()+1;
//曜日を抽出
var day = dt.getDay();
var today = dt.getDay();
//日にち
var date = dt.getDate();
//月の初めの曜日取得
var firstDate = new Date(year,month-1,1);
var firstDay= firstDate.getDay();
//月の最後の日を取得
var lastdate = new Date( year, month, 0);
var lastDate = lastdate.getDate();
console.log(firstDay);
console.log(lastDate)
var dayarray=[];

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
window.onload = function () {
    document.getElementById("susumu").onclick = function() {
        dt= new Date(year,month,1);
        console.log(dt)
        year = dt.getFullYear();
        month = dt.getMonth()+1;
        date = dt.getDate();
        firstDate = new Date(year,month-1,1);
        firstDay= firstDate.getDay();
        var lastdate = new Date( year, month, 0);
        var lastDate = lastdate.getDate();
        console.log(firstDay);
        console.log(lastDate);
        dayarray=[];
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
        for(let n = 0;n<=41;n++){
            dayset(n)
        };
        document.getElementById("yearandmonth").textContent = `${String(month)}/${String(year)}`
    };
    document.getElementById("modoru").onclick = function(){
        dt= new Date(year,month-2,1);
        console.log(dt)
        year = dt.getFullYear();
        month = dt.getMonth()+1;
        date = dt.getDate();
        firstDate = new Date(year,month-1,1);
        firstDay= firstDate.getDay();
        var lastdate = new Date( year, month, 0);
        var lastDate = lastdate.getDate();
        console.log(firstDay);
        console.log(lastDate);
        dayarray=[];
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
        for(let n = 0;n<=41;n++){
            dayset(n)
        };
        document.getElementById("yearandmonth").textContent = `${String(month)}/${String(year)}`;
    };
};



function dayset(k){
    document.getElementById(String(k+1)).textContent = String(dayarray[k]);
};
