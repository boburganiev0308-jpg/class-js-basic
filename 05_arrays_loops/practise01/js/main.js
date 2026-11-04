console.log(`ready!`);

const fruits = ['apple', 'banana', 'lemon'];
// fruits[3] = 'peach';
console.log(fruits);
fruits.push = 'orange';





const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];


let currentIndex = 0;


const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');


stepMessage.textContent = steps[currentIndex];
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

    stepMessage.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});


const newStep = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');

addBtn.addEventListener('click', () => {

    if (newStep.value !== '') {
        steps.push(newStep.value);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    }

    newStep.value = '';

})
















// removeBtn.addEventListener('click', () => {
//     steps.pop();
//     stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

// })












/*<body>
    <h1 id="main-title">配列と繰り返し処理</h1>

    <!-- ステップガイドで使用：ステップメッセージ表示エリア -->
    <section>
        <h2>ステップガイド</h2>
        <p id="step-indicator">STEP 1 / 4</p>
        <p id="step-message">ここにガイドメッセージが表示されます。</p>
        <button id="next-btn">次へ進む</button>

        <div class="add-step-form">
            <input type="text" id="new-step-input" placeholder="新しいステップを入力">
            <button type="button" id="add-btn">ステップを追加</button>
        </div>
    </section>

    <section>
        <h2>メニュー一覧（自動生成）</h2>
        <ul id="menu-list"></ul>
    </section>
</body>
 */
