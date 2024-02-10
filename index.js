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
  const data = await fetch(`https://cdn.discordapp.com/attachments${req.url}`);
  if (data.status.toString().startsWith("2")) {
    const buf = await data.arrayBuffer();
    res.writeHead(data.status, { "Content-Type": data.headers.get("Content-Type") });
    res.write(Buffer.from(buf));
    res.end();
    return;
  } else {
    const text = await data.text();
    res.writeHead(data.status, { "Content-Type": data.headers.get("Content-Type") });
    res.write(text);
    res.end();
    return;
  }
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
