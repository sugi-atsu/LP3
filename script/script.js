'use strict';
// -------------------------------スクロールでフェードイン ここから----------------------------------
const nutrientsCommentary = document.querySelectorAll('.nutrients-item__commentary');
document.addEventListener('scroll', function(){
    for (let i = 0; i < nutrientsCommentary.length; i++) {
        const getElementDistance = nutrientsCommentary[i].getBoundingClientRect().top + nutrientsCommentary[i].clientHeight * .2;
        // window.innerHeight:表示枠の上辺から底辺までの高さ（表示範囲の高さ）
        // getBoundingClientRect().top:表示枠の上辺とターゲット要素の上辺のキョリ
        if(window.innerHeight > getElementDistance){
            nutrientsCommentary[i].classList.add('commentaryFadein');
        }
    }
    for (let i = 0; i < nutrientsCommentary.length; i++) {
        const getElementDistance = nutrientsCommentary[i].getBoundingClientRect().top;
        // window.innerHeight:表示枠の上辺から底辺までの高さ（表示範囲の高さ）
        // getBoundingClientRect().top:表示枠の上辺とターゲット要素の上辺のキョリ
        if(window.innerHeight < getElementDistance){
            nutrientsCommentary[i].classList.remove('commentaryFadein');
        }
    }
});
const NutrientsImg = document.querySelectorAll('.nutrients-item__img');
document.addEventListener('scroll', function(){
    for (let i = 0; i < NutrientsImg.length; i++) {
        const getElementDistance = NutrientsImg[i].getBoundingClientRect().top + NutrientsImg[i].clientHeight * .2;
        // window.innerHeight:表示枠の上辺から底辺までの高さ（表示範囲の高さ）
        // getBoundingClientRect().top:表示枠の上辺とターゲット要素の上辺のキョリ
        if(window.innerHeight > getElementDistance){
            NutrientsImg[i].classList.add('imgFadein');
        }
    }
    for (let i = 0; i < NutrientsImg.length; i++) {
        const getElementDistance = NutrientsImg[i].getBoundingClientRect().top;
        // window.innerHeight:表示枠の上辺から底辺までの高さ（表示範囲の高さ）
        // getBoundingClientRect().top:表示枠の上辺とターゲット要素の上辺のキョリ
        if(window.innerHeight < getElementDistance){
            NutrientsImg[i].classList.remove('imgFadein');
        }
    }
});

// -------------------------------アコーディオン ここから----------------------------------
const panel_header = document.getElementsByClassName('FAQ-list-item__header');
for(let i = 0; i < panel_header.length; i++){
    panel_header[i].addEventListener('click', function(){
        //メニューを開く
        panel_header[i].nextElementSibling.classList.toggle('is_open');

        // サイドボタンを開閉時に反転する
        panel_header[i].classList.toggle('open');

        // 選択したリスト以外の処理
        for(let j = 0; j < panel_header.length; j++){
            if(j !== i){
                //他を閉じる
                panel_header[j].nextElementSibling.classList.remove('is_open');
                // サイドボタンを閉じている状態にする
                panel_header[j].classList.remove('open');
            }
        }
    });
}
// -------------------------------effect-modal ここから----------------------------------
const effect_cell = document.getElementsByClassName('imgWrapper');
const modal_item = document.getElementsByClassName('effect-modal-item');
const mask = document.getElementsByClassName('effect-mask');
const closer = document.getElementsByClassName('description__close');
for(let i = 0; i < effect_cell.length; i++){
    effect_cell[i].addEventListener('click', ()=>{
        const cellNum = i -1;
        modal_item[cellNum].classList.remove('hidden');
        mask[0].classList.remove('hidden');
    });
}
for(let i = 0; i < modal_item.length; i++){
    mask[0].addEventListener('click', ()=>{
        modal_item[i].classList.add('hidden');
        mask[0].classList.add('hidden');
    });
    closer[i].addEventListener('click', ()=>{
        modal_item[i].classList.add('hidden');
        mask[0].classList.add('hidden');
    });
}
// -------------------------------commitment-List-itemの視差効果 ここから----------------------------------
const commitment_List_item = document.getElementsByClassName('commitment-List-item');
const commitment_List_item__img = document.getElementsByClassName('commitment-List-item__img');
const commitment_imgScrollStop = ()=>{
    for(let i =0; i < commitment_List_item__img.length; i++){
        const targetElement = commitment_List_item[i].getBoundingClientRect().top * .5;
        if(targetElement >= 0){
            commitment_List_item__img[i].setAttribute('style',`transform: translate3d(0px, ${targetElement}px, 0px)`);
        }
    }
}
const commitment_imgScroll = ()=>{
    for(let i =0; i < commitment_List_item__img.length; i++){
        const targetElement = commitment_List_item[i].getBoundingClientRect().top * .5 - 50;
        commitment_List_item__img[i].setAttribute('style',`transform: translate3d(0px, ${targetElement}px, 0px)`);
    }
}
window.addEventListener('scroll',()=>{
    if(breakPoint_sur.matches){
        commitment_imgScrollStop();
    }else{
        commitment_imgScroll();
    }
});
window.addEventListener('load', ()=>{
    commitment_imgScrollStop();
})
