const express=require("express")
const { WordModel } = require("../models/Words.model")

const randomwordRouter=express.Router()

randomwordRouter.post("/",async(req,res)=>{
    const payload=req.body
    try{
        const new_word=new WordModel(payload)
        await new_word.save()
        res.send({"msg":"Word added successfully",new_word})
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

module.exports={randomwordRouter}