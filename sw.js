/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/03/27/hello-world/index.html","806a0dd6460d167ae7ad209eacff72ee"],["/2017/04/11/1013-数素数-20/index.html","94d8fe020f210bbbd67985d064443d81"],["/2018/08/16/Theme changed/index.html","a660ff946cb32047cb083ac5ab8a2801"],["/2018/08/17/Smart phone changed/index.html","8c02daffe44d86db34d690d32183b254"],["/2018/08/23/Add-background-music-of-the-blog/index.html","0468d8763961909c5809bb553f1ef752"],["/2018/08/23/how-to-upload-a-video-into-blog/index.html","f785fc15534cf6a7d0c640a478d3bc98"],["/2018/09/02/The-first-day-of-XIDIAN-University/index.html","84a9a2cb0bcd1d72c81b537361d58d08"],["/2018/10/22/pycharm向已有的项目中导入新文件/index.html","ee73ea547432eba786b46ed3e329fa9d"],["/2018/11/24/Network-Security-College-Forum/index.html","14136487b71f04e3b68076addbf7d18d"],["/2018/11/24/七牛云图片测试/index.html","63a3d96c39b39153188ccc638597665a"],["/2018/12/06/basic-konwledge-of-Deep-Learning/index.html","489370c9829c097f186bd52b1ced3785"],["/2018/12/18/A-easy-way-to-get-XPath/index.html","8e737c95b67c8c196b83e30baa041aff"],["/2019/01/25/Keng-of-Xpath/index.html","18817c7a2df89e5f48ce56e59e1b828d"],["/2019/02/19/new-year-of-2019/index.html","65e292f3599d3edaee34cf5addc0f268"],["/2019/02/28/Mom-s-birthday-of-2019/index.html","7163e8ed36eda748433d40e69fde3ec4"],["/2019/03/09/why-file-name-of-windows-os-can-t-include-some-characters/index.html","48a48afad952f3ce35cd364a13fce413"],["/2019/04/10/How-to-install-scarpy/index.html","8aaf78119fe9ce803989eaef6c9b05e0"],["/2019/04/11/Import-csv-format-of-mysql-s-data-into-navicat/index.html","98b535d15ddac8de208e19e28bd6563d"],["/2019/04/13/Help-crawler-avoid-being-banned/index.html","70cdac3316599839bda85fc83e20923f"],["/2019/04/18/Error-1405-comes-when-use-pymysql-in-pycharm-to-connect-mysql/index.html","77b9ee19cc0742d0313d9ee82d0b4474"],["/2019/04/20/The-first-time-to-send-danmaku-in-bilibili/index.html","5f664030900e225d3b014070f3aaabcd"],["/2019/04/21/文章标题可以超过50个字符了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了/index.html","09ab22ff2d8c12171a25365870a740ed"],["/about/index.html","134c73ab67090f16f4d0c8819bba8a50"],["/archives/2017/03/index.html","78a9b25b4ebd5a564ccfc95efc40a5b4"],["/archives/2017/04/index.html","4599b22e9e2866750a4303586550ac0c"],["/archives/2017/index.html","6f3d512e1ed4c43a2be1343ea1944b49"],["/archives/2018/08/index.html","236629f9326d7fc52ed369f13c54b67d"],["/archives/2018/09/index.html","f7457ec3951f60b89e0fea14fe3c5422"],["/archives/2018/10/index.html","b2c7aef32bd9bc4fd230b35ca9dabce1"],["/archives/2018/11/index.html","4cb98e4e04dc3a9ead0933b8e5f92ab2"],["/archives/2018/12/index.html","06dffe4bd22fdb1b24673ab434a3bd1b"],["/archives/2018/index.html","b82be263b6cb38b63e46e9ffc729435e"],["/archives/2019/01/index.html","053808138263d617f39932301dad8512"],["/archives/2019/02/index.html","ccc4557c6ea3ba4d10f24dd1c54507b1"],["/archives/2019/03/index.html","a64a0394a53a55766351e16f51b78cf3"],["/archives/2019/04/index.html","d34a61d4fb8cf1a9598e9c1abf7bc804"],["/archives/2019/index.html","481fde76d1832bb5cfbdf0000f5e16b5"],["/archives/index.html","53e310a24cc95d376784fc38fde3d057"],["/archives/page/2/index.html","099a958e40d2760ec7d70ab9ee91751b"],["/archives/page/3/index.html","01c4be52a67ca1bd594808903837578a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/baidu_verify_fPhOs5kLjB.html","4f335653149d5cd26e198b1ea3802fba"],["/bundle.js","6a69df44ab0ab57f09bddb2d26588c24"],["/categories/ACM/index.html","fb280396087be8f0118df49385905601"],["/categories/Academic-Forum/index.html","2b58bd3f310910092d3e6f16363f6688"],["/categories/Deep-Learning/index.html","62e2b602010bf85992eec842ba2b4533"],["/categories/Diary/index.html","199e1758047015bb8761f3d0ebe89555"],["/categories/Python/index.html","e2d88700a07915064aad323f4d783d5b"],["/categories/basic-knowledge/index.html","3c483fb3617a2b4c9c3844762d730ec6"],["/categories/database/index.html","24a8d32350149f7a7f56d15c77ba194c"],["/categories/index.html","e4fdbff55a92de50f11472973c7a1f08"],["/categories/web-crawler/index.html","3f0090a2f488c67e39baa50ad7be461d"],["/css/main.css","92a82238ac4796fa350cc1f8856ecb48"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/dog.jpg","56bb1e26ef72e8484022e7cbfe58236a"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ccef0e734cf2d41e120e554f8a2af6e9"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","b24893215933dafef9a250b4a46a602d"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5d54dcb856ae648a9cb8ce387e92b2d1"],["/page/3/index.html","86d40404b7df150196cd0f392561c3bd"],["/style.css","535397c9d8accfe338c43d1dd52dce5d"],["/sw-register.js","6b3fae0695cd9b6fb151c5bc3d361b13"]];
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
