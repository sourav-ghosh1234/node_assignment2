const express=require('express')
const app=express();

const fs=require('fs')

app.use('/vagetables',(req,res)=>{
    let rawdata=fs.readFileSync('example.json')
let student=JSON.parse(rawdata);
res.send(student)


})


app.listen(8000,()=>{
    console.log('port listning on 8000')
})