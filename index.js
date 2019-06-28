const http = require('https');

var host = 'https://api-2445581589199.staging.gw.apicast.io';
var paths = ['health', 'server-info', 'hello'];
var keys = ['04e03a6eb5eefa886b9d8ea526f6e2f2', 
            '91de66ed27dde17732a45cb94501ef9a', 
            '9cf24730bedd3ba8b7935d406cd8bd4e', 
            '04e03a6eb5eefa886b9d8ea526f6e2f2'];
  
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
