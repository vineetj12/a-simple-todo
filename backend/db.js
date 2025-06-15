const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/tododb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoschema);
module.exports={
    todo
}