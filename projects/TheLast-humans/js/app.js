var config = {
	apiKey: "AIzaSyAXK4Orxl2CghIQvKiUPtkhEngSgzteqE0",
  authDomain: "hello-world-pwa-8669c.firebaseapp.com",
  databaseURL: "https://hello-world-pwa-8669c.firebaseio.com",
	projectId: "hello-world-pwa-8669c",
  storageBucket: "hello-world-pwa-8669c.appspot.com",
  messagingSenderId: "660239288739"
};
firebase.initializeApp(config);

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function() {
		console.log('Service Worker Registered');
  });
}

var messaging = firebase.messaging();
messaging.requestPermission().then(function() {
	console.log('Notification permission granted.');
  return messaging.getToken();
}).then(function(token) {
  console.log(token);
}).catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});
