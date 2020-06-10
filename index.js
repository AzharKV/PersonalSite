// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD642i-Y7DZkjwUHE1CN6Bec2mDuBYPyKo",
    authDomain: "personalsite-93e12.firebaseapp.com",
    databaseURL: "https://personalsite-93e12.firebaseio.com",
    projectId: "personalsite-93e12",
    storageBucket: "personalsite-93e12.appspot.com",
    messagingSenderId: "640301362111",
    appId: "1:640301362111:web:cee8c2249d98d0b3514f0a",
    measurementId: "G-BKTVNLV7G5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  let userName = document.querySelector("#userName");
  let userEmail = document.querySelector("#userEmail");
  let userPhoneNumber = document.querySelector("#userPhoneNumber");
  let userMessage = document.querySelector("#userMessage");
  var db = firestore.collection("ContactData");

  document.getElementById("submit").addEventListener("click", function(){
    //submitBtn.addEventListener("click", function() { 
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;
      let userPhoneInput = userPhoneNumber.value;
      let userMessageInput = userMessage.value;
  
     //Access Database
     db.doc()
       .set({
      name: userNameInput,
      email: userEmailInput,
      phone: userPhoneInput,
      messege: userMessageInput
     })
     .then(function() {
      console.log("Data Uploaded");
      window.alert("Thanks for contacting us. We will contact you as soon as possible.");
      document.getElementById("form").reset();
      })
     .catch(function(error) {
      console.log(error);
     });
    });