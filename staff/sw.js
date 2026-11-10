/* Belle Reservations: shows the alerts the Belle alerts server sends, and sets the number on the app icon. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (err) {
    data = { title: 'Belle', body: event.data ? event.data.text() : '' };
  }
  const jobs = [
    self.registration.showNotification(data.title || 'Belle Reservations', {
      body: data.body || '',
      tag: data.id || data.kind || 'belle',
      renotify: true,
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      data: { url: data.url || './' },
    }),
  ];
  // iPhones require every push to show an alert; the badge comes with it
  if (typeof data.badge === 'number' && self.navigator && self.navigator.setAppBadge) {
    jobs.push(data.badge > 0 ? self.navigator.setAppBadge(data.badge) : self.navigator.clearAppBadge());
  }
  event.waitUntil(Promise.all(jobs).catch(() => {}));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL((event.notification.data && event.notification.data.url) || './', self.registration.scope).href;
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    const open = list.find((c) => c.url.startsWith(self.registration.scope));
    if (open) {
      open.postMessage({ type: 'open', url: target });
      return open.focus();
    }
    return self.clients.openWindow(target);
  }));
});
