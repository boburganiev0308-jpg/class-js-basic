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


const menuList = document.getElementById('menu-list');
const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];

let text = '';

for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}<li>`;
}

menuList.innerHTML = text;

