/* =========================
FORMAT RUPIAH
========================= */

window.formatRupiah =
function(number){

return new Intl.NumberFormat(
'id-ID',
{
style:'currency',
currency:'IDR'
}
).format(number);

};

/* =========================
COPY TEXT
========================= */

window.copyText =
function(text){

navigator.clipboard.writeText(
text
);

showToast(
'Teks berhasil disalin'
);

};

/* =========================
LOADING
========================= */

window.showLoader =
function(){

const loader =
document.createElement('div');

loader.className =
'global-loader';

loader.innerHTML =

`
<div class="spinner-loader"></div>
`;

document.body.appendChild(
loader
);

};

window.hideLoader =
function(){

const loader =
document.querySelector(
'.global-loader'
);

if(loader){

loader.remove();

}

};

/* =========================
GENERATE RANDOM ID
========================= */

window.generateId =
function(prefix='ID'){

const random =
Math.floor(
1000 + Math.random() * 9000
);

return `${prefix}-${random}`;

};

/* =========================
DATE FORMAT
========================= */

window.formatDate =
function(timestamp){

const date =
new Date(timestamp);

return date.toLocaleString(
'id-ID'
);

};