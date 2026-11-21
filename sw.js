const V='keu1';
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(['./','index.html','manifest.json','icon.svg']))));
self.addEventListener('fetch',e=>{
  if(e.request.method!='GET'||new URL(e.request.url).origin!=location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)));
});
