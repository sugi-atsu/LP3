'use strict';
// 購入数を変更する
const quantity = document.getElementById("quantity");
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
plus.addEventListener('click', ()=>{
    quantity.value++;
    subtotalCalc();
});
minus.addEventListener('click', ()=>{
    if(quantity.value > 1){
        quantity.value--;
    }else if(quantity.value == 0){
        quantity.value = 1;
    }
    subtotalCalc();
});
// 小計を計算する
const price = document.getElementById('price');
const subtotal = document.getElementById('subtotal');
subtotal.innerText = Number(price.innerText.replace(',','') * quantity.value).toLocaleString();
function subtotalCalc(){
    const price = document.getElementById('price');
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = Number(price.innerText.replace(',','') * quantity.value).toLocaleString();
}
// 数量の直接入力でも小計を計算できるように
quantity.addEventListener('input', ()=>{
    if(quantity.value < 0){
        quantity.value = 1;
    }
    subtotalCalc();
})
// -------------------------------モーダルウィンドウ ここから----------------------------------
const cartAdd = document.getElementById('cartAdd');
// モーダルウィンドウのアイテムを配列で取得
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const closer = document.getElementById('moveOnCart');
cartAdd.addEventListener('click', ()=>{
    // 対応するモーダルアイテムのhiddenクラスを外して、表示させる
    modal.classList.remove('hidden');
    // マスクのhiddenクラス外して、表示させる
    mask.classList.remove('hidden');
});
// マスクをクリックしてもモーダルウィンドウを閉じられるようにする
closer.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
})
mask.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
})

const test = document.getElementById('moveOnCart');
document.addEventListener('scroll', ()=>{
    console.log(getComputedStyle(test).backgroundColor);
})