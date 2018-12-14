const express = require("express")
const app = express()

var port = process.env.PORT || 3000

var statusLampu = {
    lampu1:null,
    lampu2:null
}

app.listen(port,function(req,res){
    console.log("Server is running")
})

app.get("/:lampu1/:lampu2",function(req,res){

    statusLampu = {
        lampu1:req.params.lampu1,
        lampu2:req.params.lampu2
    }

    res.redirect("/")
})

app.get("/",function(req,res){

    res.send(statusLampu)

})