const express=require('express');
const app=express();
const cors=require('cors');
const codeRouter=require('./Routes/codeRouter');
app.use(cors({
    origin:'https://compilex-t0xk.onrender.com',
    credentials:true
}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        success:"true",
        message:"Server Health Is OK! ✅"
    })
})

//routes
app.use('/code',codeRouter);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
