const app = require("./trentose2jan12-server")
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('App listening on port '+ PORT))