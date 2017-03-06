function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
function enableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: true });
}

function disableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: false });
}