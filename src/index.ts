import * as express from 'express'
import * as path from 'path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'views'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/admin', (req, res) => {
    res.render('admin.ejs')
})

app.listen(8080, () => {
    console.log(`Server Running On Port 8080`)
})