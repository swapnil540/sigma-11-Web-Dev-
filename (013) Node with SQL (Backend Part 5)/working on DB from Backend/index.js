const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const port = 9000;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // to parse data came from backend
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  // to create connection with database on mysql server
  host: "localhost",
  user: "Practice",
  database: "delta_app", // firstly need to create DB in mysql workbench
  password: "mysql@123",
});

let getRandomUser = () => {
  // generating random fake user data
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// NOW working on data in DB through backend , here db is ->  delta_app
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

// Home route
app.get("/", (req, res) => {
  try {
    let q = `SELECT count(*) FROM user`;
    connection.query(q, (err, result) => {
      if (err) throw err;

      console.log(result[0]["count(*)"]);
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occurred in DB");
  }
});

// SHOW ROUTE to get all users information
app.get("/users", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("error occured in DB");
  }
});

// ADD new user route

// serving form to add new user
app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

// extracting new user info from form and inserting in DB
app.post("/users", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  let newUser = [id, username, email, password];
  console.log(req.body);

  try {
    connection.query(q, newUser, (err, result) => {
      if (err) throw err;

      console.log("new user added successfully");
      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.send("Error occured while adding new user in DB");
  }
});

// EDIT / UPDATE route to update username
// serving form to edit username
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    // searching for user in DB based on user id
    connection.query(q, (err, result) => {
      let user = result[0];
      if (err) throw err;

      res.render("edit.ejs", { user });
      console.log(result);
    });
  } catch (err) {
    console.log(err);
    res.send("Error occured while searching user in DB");
  }
});

//UPDATE (DB) route
app.patch("/users/:id", (req, res) => {
  let { username: newUsername, password: formPassword } = req.body;
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  // search user
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      console.log(result);
      let user = result[0];

      if (formPassword != user.password) {
        res.send("Incorrect password");
      } else {
        try {
          let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}' `;
          // updating username of user in DB
          connection.query(q2, (err, result) => {
            if (err) throw err;

            res.redirect("/users");
            console.log("username edited successfully");
          });
        } catch (err) {
          console.log(err);
          res.send("Error occured while editing username of user in DB");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("error occured in DB");
  }
});

// DELETE user using their id and password

//authenticate user to delete account , by asking password
app.get("/users/:id/authenticate", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    // searching for user in DB
    connection.query(q, (err, result) => {
      let user = result[0];
      if (err) throw err;

      res.render("delete.ejs", { user });
      console.log(result);
    });
  } catch (err) {
    console.log(err);
    res.send("Error occured while searching user in DB");
  }
});

// DELETE route -> DESTROY
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPassword, email: formEmail } = req.body;

  let q = `SELECT * FROM user WHERE id = '${id}' `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];
      if (user.password === formPassword && user.email === formEmail) {
        let q2 = `DELETE FROM user WHERE id = '${id}'`;

        connection.query(q2, (err, result) => {
          if (err) throw err;

          console.log("deleted user account successfully");
          res.redirect("/");
        });
      } 
      else {
        res.send("You either entered wrong Password or email, try again.");
      }
    });
  } 
  catch (err) {
    console.log(err);
    res.send("Error occured while deleting user from DB");
  }
});

// FAKE DATA IS ADDED IN DB i.e why commented below code to add fake user data in DB

// let data = [];
// for(let i=1; i<=100; i++) { // generating fake 100 users data
//   data.push(getRandomUser());
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES ?"; // QUERY WITH PLACEHOLDER

// try { // inserting fake data using placeholders and array using query
//   connection.query(q, [data], (err, result) => {
//   if(err) throw err;
//   console.log(result);
// });
// }
// catch(err) {
//   console.log(err);
// }

// connection.end();
