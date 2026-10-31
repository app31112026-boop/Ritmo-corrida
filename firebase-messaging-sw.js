importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
// Repita aqui os mesmos dados públicos do firebase-config.js.
firebase.initializeApp({
  apiKey: 'COLE_AQUI_API_KEY',
  authDomain: 'SEU_PROJETO.firebaseapp.com',
  projectId: 'SEU_PROJETO',
  storageBucket: 'SEU_PROJETO.firebasestorage.app',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID'
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || 'Ritmo';
  const options = { body: payload.notification?.body || 'Bom dia! Confira seu treino de hoje.', icon: './icon-192.png', badge: './icon-192.png', data: { url: './' } };
  self.registration.showNotification(title, options);
});
self.addEventListener('notificationclick', event => { event.notification.close(); event.waitUntil(clients.openWindow('./')); });
