

const CACHE_NAME = 'agrivet-pos-cache-v1';

// All the assets that make up the "app shell"
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/firebase.ts',
  '/metadata.json',
  '/logo.svg',
  '/screenshot-desktop.png',
  '/screenshot-mobile.png',
  '/hooks/useOnlineStatus.ts',
  '/context/InventoryContext.tsx',
  '/context/ThemeContext.tsx',
  '/pages/HomePage.tsx',
  '/pages/InventoryPage.tsx',
  '/pages/QuickSalePage.tsx',
  '/pages/SettingsPage.tsx',
  '/pages/TransactionsPage.tsx',
  '/components/AddExpenseModal.tsx',
  '/components/AddInventoryExpenseModal.tsx',
  '/components/AddProductModal.tsx',
  '/components/BottomNav.tsx',
  '/components/CalculatorModal.tsx',
  '/components/DashboardChart.tsx',
  '/components/DeleteConfirmationModal.tsx',
  '/components/EditProductModal.tsx',
  '/components/ExpensePieChart.tsx',
  '/components/FirebaseStatusIndicator.tsx',
  '/components/OnlineStatusNotification.tsx',
  '/components/TopProductsBarChart.tsx',
  '/components/icons/ArrowRightIcon.tsx',
  '/components/icons/CalculatorIcon.tsx',
  '/components/icons/CartIcon.tsx',
  '/components/icons/CheckCircleIcon.tsx',
  '/components/icons/ClipboardListIcon.tsx',
  '/components/icons/DeleteIcon.tsx',
  '/components/icons/DownloadIcon.tsx',
  '/components/icons/EditIcon.tsx',
  '/components/icons/HomeIcon.tsx',
  '/components/icons/ImageIcon.tsx',
  '/components/icons/InventoryIcon.tsx',
  '/components/icons/PlusIcon.tsx',
  '/components/icons/ReceiptIcon.tsx',
  '/components/icons/SalesIcon.tsx',
  '/components/icons/SettingsIcon.tsx',
  '/components/icons/StoreIcon.tsx',
  '/components/icons/TrendingDownIcon.tsx',
  '/components/icons/TrendingUpIcon.tsx',
  '/components/icons/UploadIcon.tsx',
  '/components/icons/WalletIcon.tsx',
  '/components/icons/WarningIcon.tsx',
  '/components/icons/WifiIcon.tsx',
  '/components/icons/WifiOffIcon.tsx',
  '/components/icons/XIcon.tsx',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://esm.sh/react@^19.1.0',
  'https://esm.sh/react-dom@^19.1.0/client',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js',
];


// Install event: cache all the app shell assets.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        const cachePromises = ASSETS_TO_CACHE.map(asset => {
          return cache.add(asset).catch(err => {
            console.warn(`[Service Worker] Failed to cache ${asset}:`, err);
          });
        });
        return Promise.all(cachePromises);
      })
      .catch(e => {
        console.error('[Service Worker] Failed to cache app shell:', e);
      })
  );
});

// Activate event: clean up old caches.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event: serve assets from cache, falling back to network.
self.addEventListener('fetch', event => {
  // Let the browser handle requests for Firestore, as it has its own offline mechanism.
  if (event.request.url.includes('firestore.googleapis.com')) {
    return;
  }
  
  // For other requests, use a "Cache first, then network" strategy.
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Cache hit - return response from cache.
          return response;
        }

        // Not in cache - fetch from network.
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response.
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // We only cache GET requests. We also don't cache chrome-extension URLs.
            if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
                return networkResponse;
            }
            
            // IMPORTANT: Clone the response. A response is a stream and can only be consumed once.
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch(error => {
            console.error('[Service Worker] Fetch failed for:', event.request.url, error);
            // This will be triggered for navigation requests when offline and not in cache.
            // A more advanced implementation could return a custom offline fallback page.
        });
      })
  );
});
