const express=require("express");
const app=express();
const {createtodo,updatetodo}=require("./types");
const{todo}=require("./db");
app.use(express.json());
app.use(cors());
app.post("/todo",async(req,res)=>{
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you send the wrong input",
        })
        return;
    }
     await todo.create({
        tile:createpayload.tile,
        description:createpayload.description,
        completed:false
    })
    res.json({
        mes:"todo created"
    })
});

app.get("/todo",async(req,res)=>{
    const todos=await todo.findone({});
    res.json({todos});
});

app.put("/completed",async(req,res)=>{
    const updatepayload=req.body;
    const parsepayload=updatetodo.safeParse(updatepayload);
    if(!parsepayload.safeParse){
        res.status(411).json({
            msg:"you send the wrong input",
        })
    }
    await todo.update({_id:req.body.id},{completed:true});
    res.json({
        mes:"todo updated"
    })
});


app.listen(3000);