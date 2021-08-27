export function debouce(func, time = 100) {
    var timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => { func }, time);
    }
}