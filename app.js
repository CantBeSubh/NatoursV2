const fs= require('fs')
const express=require('express')
const app=express()

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         status:'success',
//         requestedAT:`${new Date()}`,
//         data:`Hello from server`
//     })
// })

// app.post('/',(req,res)=>{
//     res.status(200).json({
//         requestedAT:`${new Date()}`,
//         data:`Hello from server POST`
//     })
// })

const data=JSON.parse(fs.readFileSync(`${__dirname}\\dev-data\\data\\tours-simple.json`))

app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:data.length,
        data
    })
})

app.post('/api/v1/tours',(req,res)=>{
    newData=req.body
    res.status(newData?200:400).json({
        status:`${newData?200:400}`,
        newData
    })
})


const port=3000
app.listen(3000,()=>{
    console.log(`[+]Server started at port ${port}`)
})