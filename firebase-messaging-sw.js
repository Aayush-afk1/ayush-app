importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCg06rK2yDeHdoeg4D4NJb3TYjlwqQGKdw",
  authDomain: "aakriti-cbde0.firebaseapp.com",
  projectId: "aakriti-cbde0",
  storageBucket: "aakriti-cbde0.firebasestorage.app",
  messagingSenderId: "543051670501",
  appId: "1:543051670501:web:6c8591fe0878622473c50c",
  measurementId: "G-SNT13V6DDR"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icons/icon-192x192.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
