<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
    authDomain: "fahrixzstore.firebaseapp.com",
    databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
    projectId: "fahrixzstore",
    storageBucket: "fahrixzstore.firebasestorage.app",
    messagingSenderId: "1070736619563",
    appId: "1:1070736619563:web:735cdd57d5c90373e1526e",
    measurementId: "G-H7QL79SSMX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>