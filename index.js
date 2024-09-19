import http from 'http';
import myDateTime from './date';
import getURL from './getURL';

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'});
    res.write(myDateTime()+ "<br>");
    res.write(getURL.getPath(req)+"<br>");
    res.write(getURL.getParamsURL(req)+"<br>");
    res.end('Hello World - KTPM0121, chúc thành công');
}).listen(8080);