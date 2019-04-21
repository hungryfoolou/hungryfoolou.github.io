/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/03/27/hello-world/index.html","a902a001746a7783309fcffb81308f02"],["/2017/04/11/1013-数素数-20/index.html","93b04d6fb316d9328053467e5a5d371b"],["/2018/08/16/Theme changed/index.html","80c81aa0ee8dffbb970cba6704e94f9d"],["/2018/08/17/Smart phone changed/index.html","deedb00986b03476c9d6bc90b140e070"],["/2018/08/23/Add-background-music-of-the-blog/index.html","35d5a96bb6cd03d1aa324e425becdd09"],["/2018/08/23/how-to-upload-a-video-into-blog/index.html","b94e3ca3a7fe6d21849bbfbfd4cf5881"],["/2018/09/02/The-first-day-of-XIDIAN-University/index.html","28d5f83792c35868f587941983842ac4"],["/2018/10/22/pycharm向已有的项目中导入新文件/index.html","7cb11f6b0b9f39d683694e7bcaa4cb8a"],["/2018/11/24/Network-Security-College-Forum/index.html","ad98c22fa6860f188b21c31545cf32b0"],["/2018/11/24/七牛云图片测试/index.html","fafebeefb26f082077952007ea095f37"],["/2018/12/06/basic-konwledge-of-Deep-Learning/index.html","a452532915c43bc16f017fc13381256f"],["/2018/12/18/A-easy-way-to-get-XPath/index.html","48b37eb1dc4ec2286e7c314f7ce8c787"],["/2019/01/25/Keng-of-Xpath/index.html","3a696c15a25d8511be5d2f98a1e8d0e1"],["/2019/02/19/new-year-of-2019/index.html","fae7fe3312cfa499174decc1c73f8c53"],["/2019/02/28/Mom-s-birthday-of-2019/index.html","6b60a3809ba4f21112dbc627cc062db8"],["/2019/03/09/why-file-name-of-windows-os-can-t-include-some-characters/index.html","04ef4a845bc77208cca3cb110d1a9d42"],["/2019/04/10/How-to-install-scarpy/index.html","0cbca647f5a94270b970e699476c2532"],["/2019/04/11/Import-csv-format-of-mysql-s-data-into-navicat/index.html","290e2d410e7aab0e8fa237b85162d1e4"],["/2019/04/13/Help-crawler-avoid-being-banned/index.html","b4567284f75a71cb318be271139d22fe"],["/2019/04/18/Error-1405-comes-when-use-pymysql-in-pycharm-to-connect-mysql/index.html","28ffcbc45e29fb694158f6f6e6106ea3"],["/2019/04/20/The-first-time-to-send-danmaku-in-bilibili/index.html","a212aaf4519c0b3b445c78d3236cab57"],["/2019/04/21/文章标题可以超过50个字符了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了/index.html","b1a44b14ec44e6ca169ec432e02153a3"],["/about/index.html","75ac8ab0376608b938010bead2a66284"],["/archives/2017/03/index.html","7fb26aab12e008847b6b6ad024f621f6"],["/archives/2017/04/index.html","7b7970d43a1edd7b9acb66ceed555513"],["/archives/2017/index.html","a9a3be7dc5667ae8c95df7516e30cb60"],["/archives/2018/08/index.html","98981818aafd278ffc3f1f6e3baff451"],["/archives/2018/09/index.html","9c221cea6364ca0b77e92d4b5ae6edd7"],["/archives/2018/10/index.html","b45301def32164be04500aa880740ec3"],["/archives/2018/11/index.html","c6c02ed4b35f5aff4b9ba84251e39c0d"],["/archives/2018/12/index.html","ed590d7ecde79be2ac639d08cd531c2b"],["/archives/2018/index.html","ce288b363d77cc90828c705ef0f1c7f4"],["/archives/2019/01/index.html","f895638c2b9970f6ac8a44001a9da167"],["/archives/2019/02/index.html","3d65cbd014c64618ef82ad0ddd07e921"],["/archives/2019/03/index.html","18ea7a510ed0b06d12594b2bd4306f7e"],["/archives/2019/04/index.html","d2b3c6f638aabf4c4963e6b2e66ebb4f"],["/archives/2019/index.html","c15514d81ce1c09578d515f94999fc4d"],["/archives/index.html","b4b43e5b1867f6031e2b5d9aed842d4d"],["/archives/page/2/index.html","3f214e38709d109dede9b68994c306d6"],["/archives/page/3/index.html","2c66168bbfd654aa46efb716258c21bc"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/baidu_verify_A8UPcYYf9n.html","4360e10cccfc32c1f5e241abd95bf057"],["/bundle.js","a6ada1004733903e5d1f9ce1f30a4f1a"],["/categories/ACM/index.html","ee678e9339dc362101d20cbaa2bb1ddb"],["/categories/Academic-Forum/index.html","dab12528ea2549f0e2816d00b952257f"],["/categories/Deep-Learning/index.html","0df0877e0484c640a211e850f797b3e2"],["/categories/Diary/index.html","d45ffc6a36f9923eb8d270308ccaafe9"],["/categories/Python/index.html","ca1cd29d9235cece343ddcbef961e684"],["/categories/basic-knowledge/index.html","a375aa90a52f9603c159236c0b58f8b1"],["/categories/database/index.html","a87d4e704a12cd88044139ad6e9df3bd"],["/categories/index.html","8d296c3150b2f49e3eaa06270290bc60"],["/categories/web-crawler/index.html","a0d6b3b1ec43a04a529dbe91ec125b19"],["/css/main.css","64d835c70e89f327985b1df18e1af7ed"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/dog.jpg","56bb1e26ef72e8484022e7cbfe58236a"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","02d3bf2997e0b412732d9170ea3d26da"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","b24893215933dafef9a250b4a46a602d"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","fbe2f2cff93f8c2addb94c769118aeb7"],["/page/3/index.html","4822ce3009eb1b94b8cb3c111462df02"],["/style.css","535397c9d8accfe338c43d1dd52dce5d"],["/sw-register.js","762646dbe8e360c87a4cd38fcd6cd3fa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
