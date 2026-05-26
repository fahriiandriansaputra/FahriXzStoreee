// js/wallet.js
// Wallet Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* Request Withdraw */
window.requestWithdraw = function() {
  const amount = document.getElementById('withdrawAmount').value;
  const bank = document.getElementById('withdrawBank').value;
  const rekening = document.getElementById('withdrawRekening').value;
  const nama = document.getElementById('withdrawName').value;

  if (!amount || !bank) {
    alert('Lengkapan data withdraw!');
    return;
  }

  push(ref(db, 'withdraws/'), {
    amount, bank, rekening, nama,
    status: 'Pending',
    createdAt: Date.now()
  });

  alert('Withdraw berhasil dikirim!');
};

/* Load Withdraw History */
const withdrawRef = ref(db, 'withdraws/');

onValue(withdrawRef, snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('withdrawHistory');
  if (!container) return;

  if (!data) {
    container.innerHTML = '<p>Belum ada withdraw</p>';
    return;
  }

  let html = '';
  for (let id in data) {
    const item = data[id];
    html += `<div class="order-card"><h3>Rp${item.amount}</h3><p>${item.bank}</p><p style="color:#f59e0b;">${item.status}</p></div>`;
  }
  container.innerHTML = html;
});

console.log("✅ Wallet.js loaded!");