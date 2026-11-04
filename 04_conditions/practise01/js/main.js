console.log('04_conditions ready!');

// const score = 50;

// if (score > 70) {
//     console.log('合格');
// }
// else if (score === 30) {
//     console.log(`unfortune`);
// }
// else {
//     console.log('fail');
// }


// const age = 2;
// const hasLicense = true;

// if (age >= 18 || hasLicense === true) {
//     console.log(`can drive`);
// }
// else {
//     console.log(`canNOT drive`);
// }


// const btn = document.getElementById('btn');
// const message = document.getElementById('message');

// const isMember = true; // 会員フラグ：true または false
// const total = 4000; // 購入金額：数値


// btn.addEventListener('click', () => {

//     if (total >= 10000 && isMember) {
//         message.textContent = `【送料無料＋20%OFF】プレミアム会員特典が適用されました！`;
//         message.style.color = ' #0066cc';
//     }

//     else if (isMember && total >= 5000) {
//         message.textContent = `【【送料無料】会員特別割引が適用されました！`;
//         message.style.color = '#27ae60';
//     }

//     else {
//         message.textContent = `【送料無料＋20%OFF】プレミアム会員特典が適用されました！`;
//         message.style.color = '#e74c3c';
//     }

// })



// const btn = document.getElementById('btn');
// const message = document.getElementById('message');
// const countDisplay = document.getElementById('count');

// let count = 0;

// message.textContent = 'ボタンをクリックしてカウントを増やそう！';

// btn.addEventListener('click', () => {
//     count++;
//     countDisplay.textContent = count;

//     if (count >= 30) {
//         message.textContent = '30回達成！ゲームクリアです！';
//         message.style.color = '#e74c3c';
//     } else if (count % 10 === 0) {
//         message.textContent = `${count}回達成！あと少し！`;
//         message.style.color = '#0066cc';
//     } else {
//         message.textContent = 'ボタンをクリックしてカウントを増やそう！';
//         message.style.color = '#333333';
//     }
// });


// const pageTop = document.getElementById('page-top');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 300) {
//         pageTop.classList.add('is-active');
//     } else {
//         pageTop.classList.remove('is-active');
//     }
// });

// pageTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
