const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Oiiiiiieeeee </h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "Atircio Matias",
        email: "atmatias12@gmail.com",
      },
      {
        name: "Vini Jr",
        email: "vinimalvadeza@gmail.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Porta ${port} aberta`));
