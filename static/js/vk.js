!(function () {
    var t = document.createElement('script');
    (t.type = 'text/javascript'),
        (t.async = !0),
        (t.src = 'https://vk.com/js/api/openapi.js?169'),
        (t.onload = function () {
            VK.Retargeting.Init('VK-RTRG-1268809-aaSnY'), VK.Retargeting.Hit();
        }),
        document.head.appendChild(t);
})();
