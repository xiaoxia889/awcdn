!function(a, b) {
    a.DeviceOrientationEvent && a.addEventListener("deviceorientation", function(a) {
        a.beta && a.gamma && (b.onmousemove = null);
        var d = (a.beta - 20) / 3
          , e = -a.gamma / 3;
        d = Math.min(d, 20),
        d = Math.max(d, -20),
        e = Math.min(e, 20),
        e = Math.max(e, -20),
        c(d, e)
    }, !1);
    var c = function(a, b) {
        test.style.cssText = "-webkit-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);-ms-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);transform:rotateX(" + a + "deg) rotateY(" + b + "deg);"
    }
      , d = b.documentElement;
    BODY = b.body,
    b.onmousemove = function(a) {
        var b = a.clientX - BODY.offsetWidth / 2;
        b /= 100;
        var e = a.clientY - d.clientHeight / 2;
        e /= 100,
        e = -e,
        c(e, b)
    }
    ;
    var e = [0, 700, 2e3, 3100, 3800];
    setTimeout(function() {
        a.onscroll = function() {
            for (var a, b = 0; b < e.length; b++)
                if (a = e[b],
                a > Math.max(d.scrollTop, BODY.scrollTop) + d.clientHeight / 2)
                    return d.setAttribute("step", b)
        }
        ,
        a.onscroll()
    }, 1e3)
}(this, document);
var selectDatacenter = function(a) {
    "la" == a ? (document.getElementById("span-2").classList.add("active"),
    document.getElementById("span-3").classList.remove("active"),
    document.getElementById("price-1").innerHTML = "<big>FERR</big>"
    ) : (document.getElementById("span-2").classList.remove("active"),
    document.getElementById("span-3").classList.add("active"),
    document.getElementById("price-1").innerHTML = "<big>FERR</big>"
    )
};
console.log("© 2019 - 2020 北云");
console.log("Powered by Xiaoyu.");
console.log("Version: 2020-11-10 19:48");
console.log("");
console.log("===");
console.log("「世界は続いてる 君を目指しながら」");
var url = document.domain;
var urls = url.split('.').slice(-2).join('.');
if (urls != ('92rbq.cn' && '92rbq.com' && '8yqj.cn' && 'ijmt.cn')) {
alert("域名不匹配！");
window.location.href="http://cloud.92rbq.com"       
}