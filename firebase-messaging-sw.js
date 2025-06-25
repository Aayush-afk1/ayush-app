importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCg06rK2yDeHdoeg4D4NJb3TYjlwqQGKdw",
  authDomain: "aakriti-cbde0.firebaseapp.com",
  projectId: "aakriti-cbde0",
  storageBucket: "aakriti-cbde0.appspot.com",
  messagingSenderId: "543051670501",
  appId: "1:543051670501:web:6c8591fe0878622473c50c",
  measurementId: "G-SNT13V6DDR"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/ayush-app/icons/icon-192.png"
  });
});