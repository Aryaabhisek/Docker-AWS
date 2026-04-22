import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { YSocketIO } from 'y-socket.io/dist/server'



const app = express()
app.use(express.static("public"))// create to access the frontend part / react part in backend

const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
})


const ySocketIO = new YSocketIO(io)
ySocketIO.initialize()



//Routes
//health check routes


app.get("/health", (req, res) => {
    res.status(200).json({
        message: "ok",
        success: true
    })
})



httpServer.listen(3000, () => {
    console.log('Server is running on PORT:3000')
})