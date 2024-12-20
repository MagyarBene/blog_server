import express from 'express';
import cors from 'cors';
import { removeFromCloud } from './cloudinaryConfig.js';



const app=express()
app.use(cors())
app.use(express.json())
app.delete('/post/:id', async (req, resp)=>{
    try{
        const {id}=req.params
        removeFromCloud(id)
        resp.json({msg:"sikeres törlés!"})
    }catch{
        console.log(error);
        
    }
})

const port =process.env.PORT || 5000
app.listen(port,()=>console.log(`app listening on port : ${port}`));