                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/04/13/wechaty-gateway-use/","revision":"800992c5c2997339f4eba43677006688"},{"url":"/2022/03/31/shezhang-bujian-le/","revision":"0472975eda2499a1086f8c819ea4a3c8"},{"url":"/2022/03/30/gsma-rcs-wechaty-walnut-5g-chatbot/","revision":"a035447c46172ecff8ab77c520088554"},{"url":"/2022/03/17/event-driven-wechaty-cqrs/","revision":"33d9dcdf3a949d07cb0aafdce8efc846"},{"url":"/2022/03/14/puppet-whatsapp-1.0-released/","revision":"e1dae29e708b78717911586796268693"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
