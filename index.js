import axios from "axios";
import express from "express";
import cors from "cors";

// THIS IS AN APP/SERVER
const app = express();
const URL = "https://api.kanye.rest";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

app.use(cors());

// <SERVERNAME>.<METHODNAME>(<PATHNAME>, <CALLBACK FUNCTION>)
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(URL);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

//   axios
//     .get(URL)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//
