'use strict';

function getUrlVars() {
    var vars = [],
        hash;
    var url = window.location.href;
    var hashes = decodeURIComponent(url).slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};
