const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        requestedAT:`${new Date()}`,
        data:`Hello from server`
    })
})

app.post('/',(req,res)=>{
    res.status(200).json({
        requestedAT:`${new Date()}`,
        data:`Hello from server POST`
    })
})

const port=3000
app.listen(3000,()=>{
    console.log(`[+]Server started at port ${port}`)
})