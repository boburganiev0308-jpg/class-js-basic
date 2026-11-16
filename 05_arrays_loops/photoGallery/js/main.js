console.log('success');

const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbLists = document.querySelectorAll('.thumb-img');
let currentIndex = 0;




nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= thumbLists.length) {
        currentIndex = 0;
    }

    for (let i = 0; i < thumbLists.length; i++) {
        thumbLists[i].classList.remove('is-active');
        if (i === currentIndex) {
            thumbLists[i].classList.add('is-active');
            mainImg.setAttribute('src', thumbLists[i].getAttribute('src'))
            captionText.textContent = `${currentIndex + 1} / 4 : ${thumbLists[i].getAttribute('alt')}`;
        }

    }
});

prevBtn.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = thumbLists.length - 1;
    }

    for (i = 0; i <= thumbLists.length; i++) {
        thumbLists[i].classList.remove('is-active');

        if (currentIndex === i) {
            mainImg.setAttribute('src', thumbLists[i].getAttribute('src'));
            captionText.textContent = `${currentIndex + 1} / 4 : ${thumbLists[i].getAttribute('alt')}`;
            thumbLists[i].classList.add('is-active');
        }
    }
})



















/*<body>
    <div class="gallery-container">
        <h1>世界の絶景フォトギャラリー</h1>


        <div class="main-view">
            <img id="main-img" src="https://picsum.photos/id/1015/700/420" alt="北欧のフィヨルドと渓谷">
            <p id="caption-text">1 / 4 : 北欧のフィヨルドと渓谷</p>
        </div>




        <div class="nav-buttons">
            <button type="button" id="prev-btn">◀ 前の写真</button>
            <button type="button" id="next-btn">次の写真 ▶</button>
        </div>




        <div class="thumb-list">
            <img class="thumb-img is-active" src="https://picsum.photos/id/1015/700/420" alt="北欧のフィヨルドと渓谷">
            <img class="thumb-img" src="https://picsum.photos/id/1018/700/420" alt="霧に包まれたハイランドの山々">
            <img class="thumb-img" src="https://picsum.photos/id/1039/700/420" alt="エメラルドグリーンの森と滝">
            <img class="thumb-img" src="https://picsum.photos/id/1043/700/420" alt="夕暮れに染まるアルプスの渓谷">
        </div>
    </div>
</body>
*/
