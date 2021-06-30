const express = require("express")
const config = require("config")
const app = new express()

const PORT = config.get("port") || 5000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/Workman', require('./routes/Workman'))

async function start() {
  try{
    app.listen(PORT, () => console.log(`Starn in port ${PORT}`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()