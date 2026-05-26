import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getDatabase,
ref,
push,
onValue

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

/* =========================
FIREBASE
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
LOAD MISSIONS
========================= */

window.loadMissions =
function(){

const missionRef =
ref(db,'missions');

onValue(missionRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'missionContainer'
);

container.innerHTML = '';

for(let id in data){

const item =
data[id];

container.innerHTML +=

`
<div class="order-card">

<h3>
${item.title}
</h3>

<p>
Reward:
Rp${item.reward}
</p>

<p>
Status:
${item.status}
</p>

<button onclick="joinMission('${id}')">
Ikuti
</button>

</div>
`;

}

});

};

/* =========================
JOIN MISSION
========================= */

window.joinMission =
function(id){

const missionJoinRef =
ref(db,'mission_join');

push(missionJoinRef,{

missionId:id,

status:
'Verifikasi',

createdAt:
Date.now()

});

alert(
'Berhasil mengikuti misi'
);

};