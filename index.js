class Days{
    constructor(dt,f){
        this.cellNum= f;
        const lisMake= new lismake();
        lisMake.lisMaker(this.cellNum);
        this.dt=dt;
        //年を抽出
        this.year;
        //月を抽出
        this.month;
        //曜日を抽出
        this.day;
        this.today;
        //日にち
        this.date;
        //月の初めの曜日取得
        this.firstDate;
        this.firstDay;
        //月の最後の日を取得
        this.lastdate;
        this.lastDate;
        this.dayarray;
        this.dayChangeAndIn(dt,this.cellNum);
    }
    //日付変更関数
    dayChangeAndIn(t){
        //指定された時刻を取得
        this.dt = t;
        //年抽出
        this.year = this.dt.getFullYear();
        //月を抽出
        this.month = this.dt.getMonth()+1;
        //曜日を抽出
        this.day = this.dt.getDay();
        this.today = this.dt.getDay();
        //日にち
        this.date = this.dt.getDate();
        //月の初めの曜日取得
        this.firstDate = new Date(this.year,this.month-1,1);
        this.firstDay= this.firstDate.getDay();
        //月の最後の日を取得
        this.lastdate = new Date(this.year, this.month, 0);
        //最後の日の日にちを抽出
        this.lastDate = this.lastdate.getDate();
        console.log(this.firstDay);
        console.log(this.lastDate)
        //データを格納するリストを製作
        this.dayarray=[];
        //生成した日数をarrayに打ち込む関数（初めの月までと終わりの月からは空白を）
        for(let i = 1; i<=this.cellNum ; i++){
            if(i<=this.firstDay){
                this.dayarray.push(" ");
            }
            else if(i<=this.firstDay+this.lastDate){
                this.dayarray.push(i-this.firstDay);
            }
            else{
                this.dayarray.push(" ");
            };
        };
        console.log(this.dayarray);
        //htmlにデータをセット
        for(let n = 1;n<=this.cellNum;n++){
            this.dayset(n-1);
        };
        //見出しの日付変更
        document.getElementById("yearandmonth").textContent = `${String(this.month)}/${String(this.year)}`
    }
    //データをセットする関数
    dayset(k){
        document.getElementById(`${(k+1)}`).textContent = String(this.dayarray[k]);
    };
};

class lismake {
    lisMaker(k){
        //IDでカレンダーテーブルを見つけてくる
        var tbody = document.getElementById("calendar");
        //追加したいセルの数を７で割ってその数trを作る（行数を指定する）
        for(let i=0;i<(k/7);i++){
            var parentelement = document.createElement('tr');
            //一行に対し7つせるを作ってIDつけて、とりあえず空白を入れて、さっき作ったtrに入れておく。
             for(let n=0;n<7;n++){
                var childelement = document.createElement('td');
                childelement.id = `${(i*7)+n+1}`;
                childelement.innerHTML = " ";
                parentelement.appendChild(childelement);
             };
             //7つセルが入ったtrをテーブルに入れる。
             tbody.appendChild(parentelement);
        };
    };
};

class app{
    constructor(){
        window.onload = function () {
            const days= new Days(new Date(),42);
            document.getElementById("susumu").onclick = function() {
                days.dayChangeAndIn(new Date(days.year,days.month,days.date));
            };
            document.getElementById("modoru").onclick = function(){
                days.dayChangeAndIn(new Date(days.year,days.month-2,days.date));
            };
        };
    };
};
new app();