function include_js(file) {
    const preloader = document.querySelector('.preloader');
    const app = document.querySelector('#app');
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', file);
    _doc.appendChild(js);
    if (document.all) { //如果是IE
        js.onreadystatechange = function () {
            if (js.readyState == 'loaded' || js.readyState == 'complete') {
                // alert('IE6、IE7 support js.onreadystatechange');
            }else{
                setTimeout(function () {
                    preloader.classList.add('preloader-hidden')
                },300)
            }
        }
    }
    else {
        js.onload = function () {
            // alert('Firefox、chrome and others support js.onload');
        }
        js.onerror = function () {
            setTimeout(function () {
                preloader.classList.add('preloader-hidden')
                app.innerHTML = '<h1>加载错误！</h1><p>文件加载失败...</p>'
            },300)
        }
    }
}

// include_js('/js/chunk-vendors.js');