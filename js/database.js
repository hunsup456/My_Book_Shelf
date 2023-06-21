const bodyParser = require("body-parser");
const mysql = require("mysql");
const fs = require("fs");
const ejs = require("ejs");
const express = require("express");

const app = express();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "111111",
  database: "my_shelf",
  port: "3306",
});

//데이터베이스 연결
// connection.connect();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(`${__dirname}`));

app.get("/", (request, response) => {
  fs.readFile("../storage.html", "utf-8", (error, data) => {
    connection.query("selject * from books", (error, results, fields) => {
      if (error) throw error;
      response.send(
        ejs.render(data, {
          data: results,
        })
      );
    });
  });
});

//submit 버튼의 form이 get 방식으로 되있기에 app.get 사용
// app.get("/create", (request, response) => {
//   fs.readFile("public/insertNewBook.html", "utf-8", (error, data) => {
//     if (error) throw error;
//     response.end(data);
//   });
// });

// //데이터 수정
// app.get("/modify/:id", (request, response) => {
//   // 파일을 읽어옵니다.
//   fs.readFile("public/modify.html", "utf-8", (error, data) => {
//     connection.query(
//       "SELECT * from books WHERE number =?",
//       [request.params.id],
//       (error, results) => {
//         if (error) throw error;
//         console.log(request.params.id);
//         response.send(
//           ejs.render(data, {
//             data: results[0],
//           })
//         );
//       }
//     );
//   });
// });

// //데이터 삭제
// app.get("/delete/:id", (request, response) => {
//   connection.query(
//     "delete from books where number=?;",
//     [request.params.id],
//     (error, results) => {
//       if (error) throw error;
//       response.redirect("/");
//     }
//   );
// });

// //데이터 추가,테이블이 post 방식으로 되있기에 app.post 사용
// app.post("/create", (request, response) => {
//   const body = request.body;
//   connection.query(
//     "insert into books(genre,name,writer,releasedate) value(?,?,?,?);",
//     [body.genre, body.name, body.writer, body.releasedate],
//     () => {
//       response.redirect("/");
//     }
//   );
// });

// //데이터 수정
// app.post("/modify/:id", (request, response) => {
//   const body = request.body;
//   connection.query(
//     "update books set genre = ?, name = ?,writer = ? where number=?;",
//     [body.genre, body.name, body.writer, request.params.id],
//     () => {
//       if (error) throw error;
//       response.redirect("/");
//     }
//   );
// });

// // connection.end();

app.listen(3000, () => {
  console.log("Server is running port 3000!");
  connection.connect();
});
