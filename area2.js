const http = require('http');
url = require('url');
http.createServer((req, res) => {

    console.log(req.url);
    var q = url.parse(req.url, true).query;
    console.log(q);
    console.log(q.t1);
    console.log(q.t2);
    console.log(q.t3);
    console.log(q.t4);
    var a = Number(q.t1);
    var b = Number(q.t2);
    var c = Number(q.t3);
    var d = Number(q.t4);
    var area = a * b;
    var circle = 3.14 * c * c;
    var sqr = d * d;
    res.write("Area of the rectangle is " + area + "\n");
    res.write("Area of the circle is " + circle + "\n");
    res.write("Area of the square is " + sqr);
    res.end();

}).listen(3000);