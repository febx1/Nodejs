const a = require('http')
var fs = require('fs')
var url = require('url')

a.createServer(function (req, res) {
    var q = url.parse(req.url, true)
    // console.log(q.pathname)

    if (q.pathname == '/') {
        fs.readFile('samplehtml.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    } else if (q.pathname === '/login') {
        res.write('login')
        res.end();
    } else if (q.pathname == '/signup') {
        fs.readFile('signup.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    } else if (q.pathname === '/signupaction') {
        console.log(q.query)
        res.write('successfull')
        res.end();
    } else {
        res.write('error')
        res.end()
    }

}).listen(72, () =>
    console.log('Server started on port 72')
)

// Async - goes on the flow of code ## no waiting