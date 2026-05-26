import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getDatabase,
ref,
onValue

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

/* =========================
FIREBASE CONFIG
========================= */

const firebaseConfig = {

apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",

authDomain:
"fahrixzstore.firebasestorage.app",

databaseURL:
"https://fahrixzstore-default-rtdb.firebaseio.com",

projectId:
"fahrixzstore",

storageBucket:
"fahrixzstore.firebasestorage.app",

messagingSenderId:
"1070736619563",

appId:
"G-H7QL79SSMX"

};

const app =
initializeApp(firebaseConfig);

const db =
getDatabase(app);

/* =========================