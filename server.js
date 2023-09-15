const express = require('express')
const router = require('./router/routes')

const app = express()
app.use('/', router)



app.listen(5000, async _ => {
    // let client = await connectDb()
    // postgress.client = client
    console.log('app listening on port 5000');
})

