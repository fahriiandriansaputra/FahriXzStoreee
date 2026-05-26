/* =========================
TOP LOADING BAR
========================= */

const loadingBar =
document.createElement('div');

loadingBar.id =
'topLoadingBar';

document.body.appendChild(
loadingBar
);

window.addEventListener(
'load',
()=>{

loadingBar.style.width =
'100%';

setTimeout(()=>{

loadingBar.style.opacity =
'0';

},500);

});