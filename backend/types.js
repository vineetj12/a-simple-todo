const zod=require("zod");

const createtodo=zod.object({
    title:zod.string(),
    description:string(),
});

const updatetodo=zod.object({
    id:zod.string(),
});

module.exports={
    createtodo:createtodo,
    updatetodo:updatetodo
}