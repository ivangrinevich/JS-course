"use strict";

const p = document.querySelectorAll('p');
console.log(p);



function loadscript(src) {
    const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);
}

loadscript("js/script.js");
loadscript("js/some.js");