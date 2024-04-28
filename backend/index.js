import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/database.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

// agar dapat mengakses gambar di public
app.use(express.static("public"));
app.use(fileUpload());

const store = new sessionStore({
  db: db,
});

// Middleware
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json()); // Ini adalah middleware untuk mengurai body permintaan JSON

// Routes
app.use(ProductRoute);
app.use(UserRoute);
app.use(AuthRoute);

// store.sync();

// Server listening
app.listen(process.env.APP_PORT || 5000, () => {
  console.log("Server up and running...");
});
