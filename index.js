const http = require("http");
const port = 8000;
const fs = require("fs");

// Khời tạo một server
const server = http.createServer((request, response) => {
  if (request.url === "/home" || request.url === "/") {
    // response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // response.write("<h1 style='color: red'>Đây là trang chủ</h1>");
    // response.end();
    response.statusCode = 200; // Thành công

    const readFile = fs.readFileSync("./src/index.html").toString(); // Đoc file index.html
    const readFile1 = fs.readFileSync("./src/about.html").toString(); // Đọc file about.html

    const final = readFile + readFile1;

    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(final);
  } else if (request.url === "/contact") {
    // response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // response.write("<h1 style='color: red'>Đây là trang liên hệ</h1>");
    // response.end();
    // Đọc nội dung 2 file

    const final = fs.readFileSync("./txt/final.txt").toString();
    const public = fs.readFileSync("./txt/public.txt").toString();

    // Nối hai file
    const append = final + public;
    // Thông qua phương thức ... để ghi nội dung 2 file vào file append
    fs.writeFileSync("./txt/append.txt", append);

    // Đọc file append.txt
    const readFileAppend = fs.readFileSync("./txt/append.txt").toString();
    console.log(readFileAppend);
  } else if (request.url === "/json") {
    res.statusCode = 200;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(
      JSON.stringify({
        name: "nvquy",
        age: 20,
      })
    );
  } else {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1 style='color: red'>NOT FOUND</h1>");
    response.end();
  }
});

// Lắng nghe server
server.listen(port, () => {
  console.log(`Server của bạn đang chạy trên cổng: http://localhost:${port}`);
});
