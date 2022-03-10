const app = require("../app");
const mongoose = require("mongoose");
require("dotenv").config();
const uriDb = process.env.URI_DB;

const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`);
// });

const connection = mongoose.connect(uriDb, {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

connection
    .then(() => {
      app.listen(PORT, function () {
        console.log(`Server running. Use our API on port: ${PORT}`)
      })
    })
    .catch((err) =>
        console.log(`Server not running. Error message: ${err.message}`),
    )

