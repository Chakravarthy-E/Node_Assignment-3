const fs = require("fs");
const http = require("http");

const content = "<h1>Hello World</h1>\n<p>This is my name  {Chakravarthy}</p>";
const port = 5000;
fs.writeFile("index.html", content, (err) => {
  if (err) throw err;
  console.log("index.html file has been created successfully!");
});
const app = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});
app.listen(port, () => {
  console.log("server started");
});
