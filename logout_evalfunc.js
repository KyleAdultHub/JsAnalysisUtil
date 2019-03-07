(function () {
    if (window.__cr__eval) return;
    window.__cr_eval = window.eval;
    var myeval = function (src) {
        console.log('================ length=' + src.length + ',caller=' + (myeval.caller && myeval.caller.name) + ' ===============');
        console.log(src);
        console.log('================ end of script ================');
        return window.__cr_eval(src);
    };
    var _myeval = myeval.bind(null);
    _myeval.toString = function () {
        return 'function eval() { [native code] }'
    };
    Object.defineProperty(window, 'eval', {
        value: _myeval
    });
})();
console.log('>>>' + eval);
console.log('>>>' + ('prototype' in eval))