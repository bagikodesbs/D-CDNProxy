const http = require("http");
const https = require('https');
const url = require('url');

http.createServer(async function (req, res) {
  console.log(`Just got a request at ${req.url}!`)
  if (req.url === "/favicon.ico") {
    res.write("Fuck you shit");
    res.end();
    return;
  }
  if (!req.url.match(/^\/\d{1,25}\/\d{1,25}\/.+\..{1,25}/)) {
    res.write("twitter: @baeendtweet");
    res.end();
    return;
  }
  async function GetData() {
    let endpoint = 'https://d30221a9-b2c1-467e-95ec-4415d0ac6574-00-af4i8p3agsvu.sisko.replit.dev/gdrive?link=https://drive.google.com/file/d/${req.url}';
    const request = await fetch(endpoint, { method: "GET" });
    const response = await request.json();
    
    console.log(request.status)
    }
    
    GetData() // call the function
    const options = {
    method: req.method,
    headers: req.headers,
    agent: new http.Agent({ keepAlive: true }),
    timeout: 5000
  };
    const proxyReq = https.request(requestedUrl, options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, {
      end: true
    });
  });
  
  req.pipe(proxyReq, {
    end: true
  });
}).listen(process.env.PORT || 3000);
