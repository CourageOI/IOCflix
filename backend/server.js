const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const AuthRoutes = require("./routes/authRoute");
const usersRoute = require("./routes/usersRoute");
const movieRoute = require("./routes/movieRoute");
const privateRoute = require("./routes/private");
const listRoute = require("./routes/list");
const { errorHandler, notFound } = require("./middleWare/errorMiddleware");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use("/api/auth/", AuthRoutes);
app.use("/api/users/", usersRoute);
app.use("/api/movies/", movieRoute);
app.use("/api/lists/", listRoute);
app.use("/api/private/", privateRoute);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
