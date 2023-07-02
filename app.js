const quiz =[
    {
        question :'筋肉を増量する時にやってはいけないことは次のうちどれ？',
         answers:[
            'ステロイドを使う',
            '同じ部位を２日以上連続で鍛える',
            'タンパク質を体重の倍のグラム数摂取する',
            '水を飲みすぎる'
        ],
        correct:'同じ部位を２日以上連続で鍛える'
},{
            question :'この中で筋肉に良くないものは？',
        answers:[
        '女遊び',
        'オリーブオイルを体に塗る',
        '断食',
        '筋肉と会話する'
        ],
        correct:'断食'

        },{
            question :'この中で間違っているものはどれ？',
        answers :[
        '上腕のほとんどの筋肉は上腕二頭筋である',
        '筋肉の七割は下半身にある',
        '腹筋は６つに割れているが、腹筋そのものは一つの筋肉からできている',
        '筋肉はアミノ酸からできている'
        ],
        correct:'上腕のほとんどの筋肉は上腕二頭筋である'
        　}
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button =document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文を定義
const setupQuiz = () => {
    let buttonIndex =0;
    document.getElementById('js-question').textContent = quiz [quizIndex].question; 
    while(buttonIndex < buttonLength ){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
    setupQuiz();
    
    const clickHandler = (e) => {
        if(quiz[quizIndex].correct===e.target.textContent){
            window.alert('正解！');
            score++;
        　　}　else　{
            window.alert('不正解！');
        }
        quizIndex++;
        if(quizIndex < quizLength){
            setupQuiz();
            //    問題数があればこちらを実行
        }else{
            window.alert('終了!あなたの筋肉得点は' + score +'/' +quizLength + 'です！')
            // なければこちらを実行
       }

    };
// 正誤判定 
let handlerIndex=0;
   while (handlerIndex < buttonLength){
    $button [handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
       handlerIndex++;
};
