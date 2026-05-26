/* =========================
DARK LIGHT MODE
========================= */

const themeBtn =
document.getElementById(
'themeToggle'
);

themeBtn?.addEventListener(
'click',
()=>{

document.body.classList.toggle(
'light-mode'
);

localStorage.setItem(
'theme',
document.body.classList.contains(
'light-mode'
)
? 'light'
: 'dark'
);

});

window.addEventListener(
'DOMContentLoaded',
()=>{

const savedTheme =
localStorage.getItem(
'theme'
);

if(savedTheme === 'light'){

document.body.classList.add(
'light-mode'
);

}

});