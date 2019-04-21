/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/03/27/hello-world/index.html","c1cee891ef074abfe5288e681cfb6569"],["/2017/04/11/1013-数素数-20/index.html","e6bd321167a830760d4cc5860298d895"],["/2018/08/16/Theme changed/index.html","08777d30c6fd54621173d9249a5dbeba"],["/2018/08/17/Smart phone changed/index.html","b1756a340a7d597be7dd780806b076ec"],["/2018/08/23/Add-background-music-of-the-blog/index.html","bc53c56ee30b040c30a813164c46fc5e"],["/2018/08/23/how-to-upload-a-video-into-blog/index.html","10e611190dc98e3c9e5fa90cf07da2d1"],["/2018/09/02/The-first-day-of-XIDIAN-University/index.html","e2a57c0e2e006a617864a53d815bb9e7"],["/2018/10/22/pycharm向已有的项目中导入新文件/index.html","e3a744c3d8eb15dddd707deb11647bda"],["/2018/11/24/Network-Security-College-Forum/index.html","0d13c0eff997d3e7d0cfb7548496812e"],["/2018/11/24/七牛云图片测试/index.html","2132aa0de458e032225ceb6bdab94b75"],["/2018/12/06/basic-konwledge-of-Deep-Learning/index.html","95412d36f6ea4821da6555a4459c73b1"],["/2018/12/18/A-easy-way-to-get-XPath/index.html","4c4e83b8179eacd35c435b6fd35bce19"],["/2019/01/25/Keng-of-Xpath/index.html","76fde843ebae5e1e142196a05b797544"],["/2019/02/19/new-year-of-2019/index.html","5eacc38700d6ade15a478d59bc77d4d0"],["/2019/02/28/Mom-s-birthday-of-2019/index.html","ea04fff757a8f8bd5aadce39f32c406d"],["/2019/03/09/why-file-name-of-windows-os-can-t-include-some-characters/index.html","e96b2e823fb05d0e1481b4b03c7d1c9e"],["/2019/04/10/How-to-install-scarpy/index.html","8af10e9ba807896a0cb3b7fd43737d39"],["/2019/04/11/Import-csv-format-of-mysql-s-data-into-navicat/index.html","57c7765560acf9da551510d7139b834e"],["/2019/04/13/Help-crawler-avoid-being-banned/index.html","dbb8ab3d3e5e51a3c0e7a0428a023bcf"],["/2019/04/18/Error-1405-comes-when-use-pymysql-in-pycharm-to-connect-mysql/index.html","a8d5c0e295959b6bd1a77e0163fc0731"],["/2019/04/20/The-first-time-to-send-danmaku-in-bilibili/index.html","9ebf8c61a1465a966eaa7f3c90a8b29a"],["/2019/04/21/文章标题可以超过50个字符了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了/index.html","2177b2feb8202b9b7ac505bed102667b"],["/about/index.html","b5545b330b07349368af5764c302c1ed"],["/archives/2017/03/index.html","f6406a2d1e36c81aa4a1f86d940d8d3c"],["/archives/2017/04/index.html","f10edd23ae8eeea2273bd7792b0ae214"],["/archives/2017/index.html","6b121d99d4da74f82b52ed0d52f28014"],["/archives/2018/08/index.html","586cedbf0e105f038d9884f96527c845"],["/archives/2018/09/index.html","4237b6876aa0ce534b9aa71585eab44b"],["/archives/2018/10/index.html","d20a0fd011f9cfba7491dda856613dec"],["/archives/2018/11/index.html","f52469c2769656d7a0ea5835a0e5b1a4"],["/archives/2018/12/index.html","528176423021c1b44a71ea8d2d47522a"],["/archives/2018/index.html","f4bb956dcc08621309340a8f196dd6b3"],["/archives/2019/01/index.html","3c1a1f150cb35a1c1d333d3f10ce1c19"],["/archives/2019/02/index.html","e2c6e12fd0c96b9c293fcad457dbd49f"],["/archives/2019/03/index.html","a734f0928a890ef652a2bad104c12083"],["/archives/2019/04/index.html","dd782f24be0ac358968a02fbf3472326"],["/archives/2019/index.html","f65e0860b217bee2063806d511c9ff91"],["/archives/index.html","4eb6253bfdff55614a6da5ba8f4edb16"],["/archives/page/2/index.html","a603a89c507edcdb7ed32304a4a05286"],["/archives/page/3/index.html","89b791546b59acf148a7b4193f226591"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/bundle.js","a6ada1004733903e5d1f9ce1f30a4f1a"],["/categories/ACM/index.html","abd0ce1702183b0cc2611f7bc3e9a382"],["/categories/Academic-Forum/index.html","fd2fc7068af35082d5c093d7dbb9377e"],["/categories/Deep-Learning/index.html","28b766f86ee7bbfeab6c8923e5132d4c"],["/categories/Diary/index.html","9c31a685674d237af2ced88d65e2806b"],["/categories/Python/index.html","b89cae515b481df827ed86624cb682c0"],["/categories/basic-knowledge/index.html","af8cef392c413169ac00d6d32e15c3d1"],["/categories/database/index.html","8ee80ce2a61fbcf16d031ba8a3c84d97"],["/categories/index.html","ccf743156b55caf40c5242a8ca172e82"],["/categories/web-crawler/index.html","151f3dc0be3dc058efc43a8b43f636d6"],["/css/main.css","807ebed9253258aacdb488a9acc4d65d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/dog.jpg","56bb1e26ef72e8484022e7cbfe58236a"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9c765256ce42e1066679f8b738e26088"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","b24893215933dafef9a250b4a46a602d"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e4a7a1455e57e1aecc03ad479fbe1e33"],["/page/3/index.html","0cc51cea179b1805ac120c5e89ef4be3"],["/style.css","edaae02c3f97dad438881a1ce64209e4"],["/sw-register.js","36a8cc0cc24d2c47b12a26a0766c2fac"]];
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
