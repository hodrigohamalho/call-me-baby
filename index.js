const http = require('https');

var host = 'https://open-banking-3scale-apicast-production.apps.cluster-27d6.27d6.sandbox1865.opentlc.com/public';
var paths = ['banks', 'banks/deutsche-bank-werl', 'banks/deutsche-bank-werl/atms', 'banks/deutsche-bank-werl/products','banks/deutsche-bank-werl/branches'];
var keys = ['8df307092ac9b717c5328401466d1748','0dc2bd78fb2303e13c094854105b3b51'];


var x = function(_url, _options){
    http.get(_url, _options, (resp) => {
        console.log(`${resp.statusCode} - ${_url}`);

        var req = generateRequest();
        x(req.url, req.options);
    });
}

var generateRequest = function(){
    var path = paths[Math.floor(Math.random()*paths.length)];
    var key = keys[Math.floor(Math.random()*keys.length)];
    var url = host+'/'+path+"?user_key="+key;
    console.log(url);

    var options = {
        // 'headers': {
        //     'user-key': key
        // }
    }

    return {'url': url, 'options': options};
}

var req = generateRequest();
x(req.url, req.options);
