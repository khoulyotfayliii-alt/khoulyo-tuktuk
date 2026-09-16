// Khoulyo TUKTUK V3
// Cache-busting service worker registration + small shared helpers.
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=3").catch(()=>{}));
}
