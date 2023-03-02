const express= require("express")
const { connection } = require("./config/db")


cors=require("cors")

require("dotenv").config()

const app=express()
app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.get("/",(req,res)=>{
    const alpha="abcdefghijklmnopqrstuvwxyz"
    const randomLenght=Math.floor(Math.random()*10)+1
    let word=""
    for(let i=0;i<randomLenght;i++){
        const randomI=Math.floor(Math.random()*alpha.length)
        word+=alpha[randomI]
    }
    res.send(word)
})

// app.use("/randomword",randomwordRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")

    }catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Server running at ${process.env.port}`)
})