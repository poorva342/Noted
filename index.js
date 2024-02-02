const connectToMongo=require('./db');
const express = require('express')
var cors=require('cors')

connectToMongo();
const port = 5000;
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`Noted listening on port ${port}`)
})