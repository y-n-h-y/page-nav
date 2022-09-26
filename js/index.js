const sectionBlock = document.querySelector('.sectionBlock');
const articleWrap = document.querySelector('.articleWrap');
const items = Array.from(document.querySelectorAll('.pageItem'));
const itemParent = document.querySelector('.itemParent');
const originUrl = location.origin;
const urlPath = location.pathname;
const pageNavWrap = document.createElement('ul');
pageNavWrap.classList.add('pageNavWrap');
sectionBlock.insertBefore(pageNavWrap, articleWrap.nextSibling);

for (const item of items) {//アイテムすべてにhideクラスをつける
    item.classList.add('hide');
};

//6項目ずつ表示する関数
const articleSplit = (num, arr) => {//アイテムを6個ずつに分割する
    const arrWrap = [];
    const index = 0;
    const hash = location.hash;
    const pageNum = hash.slice(1) - 1;//ページネーション番号取得
    while (index < arr.length) {
        arrWrap.push(arr.splice(index, index + num));
    }

    arrWrap.forEach((elm, i) => {//ページ数分のページネーションを作成
        let list = document.createElement('li');
        list.dataset.pagenumber = i + 1;
        list.textContent = `${i + 1}`;
        pageNavWrap.append(list);
    });
    pageNavFlg = true;

    const pageNavList = pageNavWrap.querySelectorAll('li');
    if (hash === '') {
        const arr01 = arrWrap[0];
        for (const viewItem of arr01) {
            viewItem.classList.remove('hide');
        }
        pageNavList[0].classList.add('active');
    } else {
        const viewItems = arrWrap[pageNum];
        for (const viewItem of viewItems) {
            viewItem.classList.remove('hide');
        }
        pageNavList[pageNum].classList.add('active');
    }

};


const pageNavEvent = (num) => {
    if (num == 1) {
        location.href = originUrl + urlPath;
    } else {
        location.hash = num
        location.reload();
    }
}


window.addEventListener('load', () => {
    articleSplit(6, items);

    const pageNavs = pageNavWrap.querySelectorAll('li');
    for (const pageNav of pageNavs) {
        pageNav.addEventListener('click', (e) => {
            const target = e.target;
            const targetNum = target.dataset.pagenumber;
            pageNavEvent(targetNum);
        });
    }
});