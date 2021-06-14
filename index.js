const http = require('https');

var host = 'https://open-data-api20-2445581589199.production.gw.apicast.io:443/public';
var paths = ['banks', 'banks/deutsche-bank-werl', 'banks/deutsche-bank-werl/atms', 'banks/deutsche-bank-werl/products','banks/deutsche-bank-werl/branches'];
var keys = ['9340769dcc803b19961243cb3c3fd19f','b2fc23d60227388ac387bad214b311a3', '15d2ed04a66e3d52b1631ee6ddb0f105', '39c0c1b4c008a6c9b1651b52dc789e5b'];


var x = async function(_url, _options){

    await new Promise(r => setTimeout(r, 2000));

    http.get(_url, _options, (resp) => {
        console.log(`${resp.statusCode} - ${_url}`);

        var req = generateRequest();
        x(req.url, req.options);
    });
}

var generateRequest = function(){
    var path = paths[Math.floor(Math.random()*paths.length)];
    var key = keys[Math.floor(Math.random()*keys.length)];
    var url = host+'/'+path; //+"?user_key="+key;
    console.log(url);

    var options = {
        'headers': {
            'user-key': key
        }
    }

    return {'url': url, 'options': options};
}

var req = generateRequest();
x(req.url, req.options);
