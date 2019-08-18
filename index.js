const http = require('https');

var host = 'https://open-data-api20-2445581589199.staging.gw.apicast.io';
var paths = ['banks', 'banks/deutsche-bank-werl', 'banks/deutsche-bank-werl/atms', 'banks/deutsche-bank-werl/products','banks/deutsche-bank-werl/branches'];
var keys = ['b2fc23d60227388ac387bad214b311a3','15d2ed04a66e3d52b1631ee6ddb0f105','9022657b21d5b7c7f39c20361e2d11fc'];


var x = function(_url, _options){
    http.get(_url, _options, (resp) => {
        console.log(`${resp.statusCode} - ${_url} - user-key: ${_options.headers['user-key']} `);

        var req = generateRequest();
        x(req.url, req.options);
    });
}

var generateRequest = function(){
    var path = paths[Math.floor(Math.random()*paths.length)];
    var key = keys[Math.floor(Math.random()*keys.length)];
    var url = host+'/'+path;
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
