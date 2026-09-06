importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Force this service worker to take over immediately whenever a new
// version is uploaded, instead of waiting for every open tab to close
// first (the browser default). Without this, phones can keep running
// a stale cached copy indefinitely.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

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
