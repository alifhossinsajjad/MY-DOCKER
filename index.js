const http = require("http");

const server = http.createServer((req, res) => {
  res.end("🚀 My Docker DevOps App is Running! right now ");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});