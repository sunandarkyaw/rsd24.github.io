require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use("/static", express.static("./photos"));

const { usersRouter } = require("./routers/users");
const { postsRouter } = require("./routers/posts");
const { notisRouter } = require("./routers/notis");
app.use(usersRouter);
app.use(postsRouter);
app.use(notisRouter);
app.listen(process.env.PORT, () => {
    console.log(`X API running at ${process.env.PORT}`);
})

// const jwt = require("jsonwebtoken");
// //jwt is not hash token, it is encrypted token so can transform to original form.
// const token = jwt.sign({ name: 'Tom', role: 'admin' }, 'secret');

// console.log(token);

// //decrypt token, must know which secret key is used.
// const data = jwt.verify(token, 'secret');
// console.log(data);