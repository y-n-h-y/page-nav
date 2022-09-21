const sectionBlock = document.querySelector('.sectionBlock');
const articleWrap = document.querySelector('.articleWrap');
const items = Array.from(document.querySelectorAll('.pageItem'));
const itemParent = document.querySelector('.itemParent');

const pageNavWrap = document.createElement('ul');
pageNavWrap.classList.add('pageNavWrap');
sectionBlock.insertBefore(pageNavWrap, articleWrap.nextSibling);

//アイテムを6個ずつに分割する
const articleSplit = (num, arr) => {
    const arrWrap = [];
    const index = 0;
    while (index < arr.length) {
        arrWrap.push(arr.splice(index, index + num));
    }
    console.log(arrWrap);
    arrWrap.forEach((elm, i) => {
        let list = document.createElement('li');
        list.dataset.pagenumber = i + 1;
        list.textContent = `${i + 1}`;
        pageNavWrap.append(list);
    });
};

window.addEventListener('load', () => {
    articleSplit(6, items);
});