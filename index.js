window.addEventListener('load',function(){
    var dt;
    //年を抽出
    var year;
    //月を抽出
    var month;
    //曜日を抽出
    var day;
     var today;
    //日にち
    var date;
    //月の初めの曜日取得
    var firstDate;
    var firstDay;
    //月の最後の日を取得
    var lastdate;
    var lastDate;
    var dayarray;
    let cellNum= 42;

    let dayChangeAndIn = (t,f)=>{
        //指定された時刻を取得
        dt = t;
        //年抽出
        year = dt.getFullYear();
        //月を抽出
        month = dt.getMonth()+1;
        //曜日を抽出
        day = dt.getDay();
        today = dt.getDay();
        //日にち
        date = dt.getDate();
        //月の初めの曜日取得
        firstDate = new Date(year,month-1,1);
        firstDay= firstDate.getDay();
        //月の最後の日を取得
        lastdate = new Date(year, month, 0);
        //最後の日の日にちを抽出
        lastDate = lastdate.getDate();
        console.log(firstDay);
        console.log(lastDate)
        //データを格納するリストを製作
        dayarray=[];
        //生成した日数をarrayに打ち込む関数（初めの月までと終わりの月からは空白を）
        for(let i = 1; i<=f ; i++){
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
        console.log(dayarray);
        //htmlにデータをセット
        for(let n = 1;n<=f;n++){
            dayset(n-1);
        };
        //見出しの日付変更
        document.getElementById("yearandmonth").textContent = `${String(month)}/${String(year)}`
    };

    let dayset = (k)=>{
        document.getElementById(`${(k+1)}`).textContent = String(dayarray[k]);
    };
    let lisMaker = (k)=>{
        //IDでカレンダーテーブルを見つけてくる
        var tbody = document.getElementById("calendar");
        //追加したいセルの数を７で割ってその数trを作る（行数を指定する）
        for(let i=0;i<(k/7);i++){
            var parentelement = document.createElement('tr');
            //一行に対し7つせるを作ってIDつけて、とりあえず空白を入れて、さっき作ったtrに入れておく。
            for(let n=0;n<7;n++){
                var childelement = document.createElement('td');
                childelement.id = `${(i*7)+n+1}`;
                parentelement.appendChild(childelement);
            };
            //7つセルが入ったtrをテーブルに入れる。
            tbody.appendChild(parentelement);
        };
    };
    lisMaker(cellNum);
    dayChangeAndIn(new Date(),cellNum);

    document.getElementById("susumu").addEventListener('click',function() {
        dayChangeAndIn(new Date(year,month,date),cellNum);
        document.getElementById("dayformer").value = `${year}-${month.toString().padStart(2,'0')}`;
    });
    document.getElementById("modoru").addEventListener('click',function(){
        dayChangeAndIn(new Date(year,month-2,date),cellNum);
        document.getElementById("dayformer").value = `${year}-${month.toString().padStart(2,'0')}`;
    });
    
    this.document.dayform[1].addEventListener("click",()=>{
        var datestr=`${document.dayform[0].value}-01`;
        var warpdate=new Date(datestr)
        console.log(new Date())
        console.log(warpdate);
        dayChangeAndIn(warpdate,cellNum);

    });
    
    document.getElementById("dayformer").value = `${year}-${month.toString().padStart(2,'0')}`;
    console.log(document.dayform[0].value);
});