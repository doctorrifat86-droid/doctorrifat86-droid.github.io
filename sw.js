const CACHE='icu-bundle-v3';
const FILES=["./","index.html","style.css","ads-config.js","ads.js","calcs.js","checklists.js","diseases.js","topics.js","app.js","app2.js","manifest.webmanifest","about.html","privacy.html","terms.html","contact.html","icons/favicon-32.png","icons/logo-128.jpg","icons/logo-256.png","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
 // Never intercept or cache third-party requests (Google AdSense, analytics, etc.)
 if(url.origin!==location.origin)return;
 // Only handle this app's own files (other GitHub Pages projects may live in sub-folders of the same origin)
 const rel=url.href.slice(self.registration.scope.length);if(!url.href.startsWith(self.registration.scope)||(rel.split('?')[0].includes('/')&&!rel.startsWith('icons/')))return;
 // ads.txt / ads-config.js: always network-first so publisher changes apply immediately
 const fresh=/\/(ads\.txt|ads-config\.js)$/.test(url.pathname);
 if(fresh){e.respondWith(fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return res}).catch(()=>caches.match(req,{ignoreSearch:true})));return}
 e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(res=>{if(res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return res}).catch(()=>req.mode==='navigate'?caches.match('index.html'):undefined)))});
