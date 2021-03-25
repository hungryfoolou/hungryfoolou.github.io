/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/04/11/1013-数素数-20/index.html","4a15ae27b097eab6a74a6ad95532a5d7"],["/2018/08/16/Theme changed/index.html","fbc02442071d9da86904a38068aeb530"],["/2018/08/17/Smart phone changed/index.html","25fe4f8f5707f381d5425c5b57f6ba1f"],["/2018/08/23/Add-background-music-of-the-blog/index.html","1f26c0aeac831538e3e7699b30610cfe"],["/2018/08/23/how-to-upload-a-video-into-blog/index.html","4dc73767b034d83eb5565c32d5eb9a65"],["/2018/09/02/The-first-day-of-XIDIAN-University/index.html","2614be3512b15b3a4658a27c757ccd33"],["/2018/10/22/pycharm向已有的项目中导入新文件/index.html","045d63a6dd13a29fa1bcd8de55f9f07f"],["/2018/11/24/Network-Security-College-Forum/index.html","6888f27703d59a25aabd04cfb70b5eac"],["/2018/11/24/七牛云图片测试/index.html","671cc2b73b4a7ee53cc86ca216e224b5"],["/2018/12/06/basic-konwledge-of-Deep-Learning/index.html","ab4aaaed48bb03fe8ec197cf84dc28ee"],["/2018/12/18/A-easy-way-to-get-XPath/index.html","1eec667a05bd53a2023e17e3a0d8276f"],["/2019/01/25/Keng-of-Xpath/index.html","84d1a5c67d49c9fd7f9bdee99bd7bd35"],["/2019/02/19/new-year-of-2019/index.html","a3744e1e59fcce29e3cbb2c7113e824f"],["/2019/02/28/Mom-s-birthday-of-2019/index.html","fbce5da81395524b25ef5520f1ddc1f2"],["/2019/03/09/why-file-name-of-windows-os-can-t-include-some-characters/index.html","5498ab69252b21521e349f393daf3da9"],["/2019/04/10/How-to-install-scarpy/index.html","6b0ab9288055a6f51d48614d70e4de34"],["/2019/04/11/Import-csv-format-of-mysql-s-data-into-navicat/index.html","66c39123c313b2fae53d439d908eb629"],["/2019/04/13/Help-crawler-avoid-being-banned/index.html","690852fd8239226defe60697b93e7a1c"],["/2019/04/18/Error-1405-comes-when-use-pymysql-in-pycharm-to-connect-mysql/index.html","79c3153f145b95d6e926da1691ffbf8c"],["/2019/04/20/The-first-time-to-send-danmaku-in-bilibili/index.html","d72403e1693c8c5b9064800778b7935e"],["/2019/04/21/文章标题可以超过50个字符了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了/index.html","1c02e359f79d51342f0d3ec56d85034f"],["/2019/04/25/如何使用循环修改python的字典中的数据/index.html","53e77afced373580cada666bfdaa7586"],["/2019/05/05/python之深拷贝/index.html","b8851c4bd7fff87bc4440a277f4f1929"],["/2019/05/05/python的list中去掉重复元素/index.html","3c5d93adb18677e564a93a4abf9b09cb"],["/2019/05/05/易上手的字幕制作软件ArcTime/index.html","717c01d19d09226f5157f8aa7d1e0960"],["/2019/05/29/测试在线播放ppt/index.html","037269b42fc1e5f7a054c3a5ff7a0663"],["/2019/06/27/语言真有趣/index.html","7c6852ea2b9336243ba276e4b50dc7bf"],["/2019/08/01/hello-world/index.html","45a23fa0b5a1d4f4e7e660b314040d8b"],["/2019/08/01/重装系统配置Hexo/index.html","d94c17be172363d4546c3b86dd1e267b"],["/2019/08/16/pycharm导入项目时某些import语句失效/index.html","9762c38e874a566416b1b28b5b8b04b1"],["/2019/08/16/将大文件的xls格式转换为csv格式/index.html","df99ccc4cc0cda67542880b916d71032"],["/2019/08/16/通过github上传大文件/index.html","1f73a0abdaf37cb2cfe844862affa9f0"],["/2021/03/25/hello-world/index.html","e45e6344079056d20a90a115b4cf35c4"],["/about/index.html","5611ffe9748026bd83be6c370774aaf3"],["/archives/2017/04/index.html","3d46b54a6ba4634fdd20ebba6c4a4636"],["/archives/2017/index.html","5dcf1557eb695b81c79e4826c8055cd0"],["/archives/2018/08/index.html","821907453997c4822f28422198266424"],["/archives/2018/09/index.html","1fa9e1ef7d33d14959df6fc074aa9ec7"],["/archives/2018/10/index.html","164cf8e54b4e4fb68a1676561fe02597"],["/archives/2018/11/index.html","daec312cdf9491b21f2c3a4d0fb5665d"],["/archives/2018/12/index.html","9a17f649bdbc31c4cbb933ae60d46cc2"],["/archives/2018/index.html","1c40d7802e30db5b397d0e60010209ee"],["/archives/2019/01/index.html","c3e055050efb0fd6b00f093c89d8b854"],["/archives/2019/02/index.html","f1a301334499222899780ef92e9b4b22"],["/archives/2019/03/index.html","925c6059ba1e996eee35082e065bb985"],["/archives/2019/04/index.html","4beb05d93f6bfa2d071171abf2cc0bb8"],["/archives/2019/05/index.html","28c7b283faf02e15db875112ef3d1a0d"],["/archives/2019/06/index.html","a4f56723f5a2edd150297e280d1b068a"],["/archives/2019/08/index.html","dee0fec0551de80c7aa1a6b9bd8bfdee"],["/archives/2019/index.html","3b51dd767060bd4b8a6da2d95254ecae"],["/archives/2019/page/2/index.html","bb7a66eab6334f4096472d18b29373b9"],["/archives/2019/page/3/index.html","a2d7901d1b18e5fd13768b14df6349b4"],["/archives/2021/03/index.html","08102500db0be9bb361892fdea73746c"],["/archives/2021/index.html","12e56622a716454f2fefef2ad22e0954"],["/archives/index.html","cdd1753250416c0a3e2c86cb9c687c23"],["/archives/page/2/index.html","247c97e73c777ac1b468685950f81336"],["/archives/page/3/index.html","db5315873b28dcd12b63e38ae38549c7"],["/archives/page/4/index.html","4a3594cab76cbdc9aca2fac9936d7e3b"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/baidu_verify_DbO2NEiiDN.html","593818aaa8daa1884368140656683010"],["/categories/ACM/index.html","0873b9db9c3b8897fa08fc7d08c88f44"],["/categories/Academic-Forum/index.html","d632636118c0de7cd61bbb8a69588401"],["/categories/Deep-Learning/index.html","f98c19061ee0b01a521b0762e7eaa5ec"],["/categories/Diary/index.html","8b9bb7862c26f245d859940d1cc927b9"],["/categories/Diary/page/2/index.html","0b94816560383dd2774222d3e981f9fb"],["/categories/Entertainment/index.html","136571f2c1305a5560492c4832c0d4bd"],["/categories/Python/index.html","a986c402c93d8eb7b248ba9cd9d74437"],["/categories/basic-knowledge/index.html","892b423e1e6d059617c071ab49ecdaf5"],["/categories/database/index.html","08d8c2826faa9fa9cfc5bcffd98f532b"],["/categories/index.html","1012e0a6a2c00c7e72f354a2dbe9d848"],["/categories/web-crawler/index.html","07708933353e6b8741ab58f3fe224059"],["/css/main.css","7da9bf90e18159088f296a998d224332"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/dog.jpg","56bb1e26ef72e8484022e7cbfe58236a"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e0a495cef61b90d7baeb053cde29b4a8"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","b24893215933dafef9a250b4a46a602d"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c094f5205844f0c8de65cca48d8ad374"],["/page/3/index.html","a49bf4b3ead5679ed81e519399fcb73d"],["/page/4/index.html","2c0df07619d83b7e41b777ac7fbaf9ae"],["/sw-register.js","bfa64a044c9d0ef8e52c80f5dc6a9e81"]];
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
