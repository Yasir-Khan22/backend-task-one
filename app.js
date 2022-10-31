const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({ 'slackUsername': "YasirKhan", 'backend': true, 'age': 22, 'bio': "learning backend development to produce better quality developers" })
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


