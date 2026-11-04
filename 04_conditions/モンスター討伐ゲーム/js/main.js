
const MAX_HP = 100;
const DAMAGE = 25;
let currentHP = 100;

const beforeImg = `https://picsum.photos/id/1025/400/250`;
const afterImg = `https://picsum.photos/id/1062/400/250`;






const enemyImg = document.getElementById(`enemy-img`);
const display = document.getElementById(`hp-display`);
const message = document.getElementById(`battle-message`);
const btnAttack = document.getElementById(`attack-btn`);
const btnReset = document.getElementById(`reset-btn`);

btnAttack.addEventListener(`click`, () => {
    currentHP = currentHP - DAMAGE;


    if (currentHP <= 0) {

        display.textContent = `HP:${currentHP}/100`;
        message.textContent = `Attack is OVER`;
        display.style.color = `#ff0000`;
        btnAttack.setAttribute(`disabled`, `true`);
        enemyImg.setAttribute(`src`, afterImg);

    }

    else if (currentHP <= 25) {
        display.textContent = `HP:${currentHP}/100`;
        message.textContent = `one more time dropped to 25`;
        display.style.color = `#00ff00`;
    }

    else if (currentHP <= 50) {
        display.textContent = `HP:${currentHP}/100`;
        message.textContent = `again fall to 50`;
        display.style.color = `#f05e1c`;
    }

    else if (currentHP <= 75) {
        display.textContent = `HP:${currentHP}/100`;
        message.textContent = `dropped to 75`;
        display.style.color = `#e03c8a`;
    }

});


btnReset.addEventListener('click', () => {
    currentHP = MAX_HP;

    display.textContent = `HP:${currentHP}/100`;
    message.textContent = `「こうげき」ボタンを押してダメージを与えよう！`;
    display.style.color = `#000`;
    btnAttack.removeAttribute(`disabled`);
    enemyImg.setAttribute(`src`, beforeImg);
})




/*<body>
    <h1>モンスター討伐ゲーム</h1>

    <div>
        <img id="enemy-img" src="https://picsum.photos/id/1025/400/250" alt="元気なモンスター">
    </div>

    <p id="hp-display">HP: 100 / 100</p>
    <p id="battle-message">「こうげき」ボタンを押してダメージを与えよう！</p>

    <div>
        <button id="attack-btn">こうげき！</button>
        <button id="reset-btn">もう一度たたかう</button>
    </div>
</body>
*/
