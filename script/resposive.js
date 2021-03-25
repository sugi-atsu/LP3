'use strict';

// -------------------------------ブレイクポイント設定 ここから----------------------------------
const size_ipadPro = 1024;
const size_ipad = 768;
const size_sur = 540;
const breakPoint_ipadPro = window.matchMedia(`(max-width: ${size_ipadPro}px)`);
const breakPoint_ipad = window.matchMedia(`(max-width: ${size_ipad}px)`);
const breakPoint_sur = window.matchMedia(`(max-width: ${size_sur}px)`);
// -------------------------------デバイスごとに画像src切り替え ここから----------------------------------
const mediaQuery = ()=>{
    if(breakPoint_ipadPro.matches){
        changeToSP();
    }else{
        changeToPC();
    }
}
// -------------------------------viewport切り替え判定 ここから----------------------------------
window.addEventListener('load', ()=>{
    mediaQuery();
});
breakPoint_ipadPro.addEventListener('change',()=>{
    mediaQuery();
});
// -------------------------------画像srcのPath ここから----------------------------------
const firstViewImg = document.getElementsByClassName('firstViewImg');
const firstViewLogo = document.getElementById('firstViewLogo');
const changeToPC = () => {
    firstViewLogo.src = './img/logo_vertical.png';
    for(let i = 0; i < 5; i++){
        firstViewImg[i].src = `./img/firstveiw-img${i}.jpeg`;
    }
}
const changeToSP = () => {
    firstViewLogo.src = './img/logo_horizontal.png';
    for(let i = 0; i < 5; i++){
        firstViewImg[i].src = `./img/firstveiw-img${i}--sp.jpeg`;
    }
}
// -------------------------------commitment-List-itemの視差効果のsurface以下レスポンシブ ここから----------------------------------
