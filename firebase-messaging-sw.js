importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB85TgADS5qYiQUYGpnvoWZGmPXwxzjerM",
  authDomain: "corkboard-7daf8.firebaseapp.com",
  projectId: "corkboard-7daf8",
  storageBucket: "corkboard-7daf8.firebasestorage.app",
  messagingSenderId: "573617407877",
  appId: "1:573617407877:web:c87f4ce5d1e57ffe68e6ec"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.data || {};
  self.registration.showNotification(title || 'Corkboard update', {
    body: body || 'Something changed on the board.'
  });
});
