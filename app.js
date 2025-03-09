// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDTabp2Dfv--RhHO6L-4hbxdb35HbuAxd8",
//   authDomain: "bakkar-jr.firebaseapp.com",
//   projectId: "bakkar-jr",
//   storageBucket: "bakkar-jr.firebasestorage.app",
//   messagingSenderId: "89884942656",
//   appId: "1:89884942656:web:7005bafaa4cc211eb35aa5",
//   measurementId: "G-RETWEG4PT8"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// let getbtn =document.getElementById('btn')
// getbtn.addEventListener('click', function () {
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('pass').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       window.location.href = "login.html";
//       const user = userCredential.user;
//       console.log("User created:", user.email);
//       alert("Account created successfully!"); // Success message

//     })
//     .catch((error) => {
//       alert(`Error: ${error.code} - ${error.message}`); // Proper error message
//     });
// });
// let loginbtn = document.getElementById('lbtn')

// loginbtn.addEventListener('click', function () {
//   let email = document.getElementById('lemail').value;
//   let password = document.getElementById('lpass').value;
//   signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//       alert("Login Successful!");
//       localStorage.setItem("userEmail", userCredential.user.email);
//       window.location.href = "home.html";
//   })
//   .catch(error => {
//       alert("Error: " + error.message);
//   });
// });


//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       window.location.href = 'home.html'; 
//       const user = userCredential.user;
//       console.log("User logged in:", user.email);
//       alert("Login successful!");
//      // Redirect only after successful login
//     })
//     .catch((error) => {
//       alert(`Login failed: ${error.code} - ${error.message}`); // Show error instead of redirecting blindly
//     });
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDTabp2Dfv--RhHO6L-4hbxdb35HbuAxd8",
  authDomain: "bakkar-jr.firebaseapp.com",
  projectId: "bakkar-jr",
  storageBucket: "bakkar-jr.firebasestorage.app",
  messagingSenderId: "89884942656",
  appId: "1:89884942656:web:7005bafaa4cc211eb35aa5",
  measurementId: "G-RETWEG4PT8"
};


const app = initializeApp(firebaseConfig);



const auth = getAuth();
let getBtn = document.getElementById('btn')

getBtn.addEventListener('click', function(){
const email = document.getElementById('email').value
const password = document.getElementById('pass').value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  alert(user.email+' account created successfully')

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode,errorMessage)
});
})
