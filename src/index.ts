import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import booksRouter from './books/router'
import authorsRouter from './authors/router'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const dbConnextionURL = process.env.DB_CONNECTION || ''

app.use(express.json())

app.use('/books', booksRouter)
app.use('/authors', authorsRouter)

startApp()

function startApp() {
    mongoose.connect(dbConnextionURL)
        .then(() => {
            app.listen(port, () => {
                console.log('🎉 Horray! Connection is open on the port: ' + port)
            })

        })
        .catch(err => {
            console.log('DB Connection failed!\n', err)
        })
}
