let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.write("Welcome page");
  res.end();
})
app.listen(PORT, () => {console.log("listening to request on PORT " + PORT)})
