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
    const data = await fetch(`https://d30221a9-b2c1-467e-95ec-4415d0ac6574-00-af4i8p3agsvu.sisko.replit.dev/gdrive?link=https://drive.google.com/file/d/${req.url}`);
    const request = await fetch(endpoint);
    
    const dataType = request.headers.get("content-type");
    
    if(dataType.includes("application/json") {
    const response = await request.json(); // parse the data
    console.log(response)
    } else {
    console.log('We expected the data to be in json format')
    }
    
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
