export function Createtodo(){
    return <div>
        <input id="title" style={{margin:10, padding:10}} type="text" placeholder="title"></input><br />
        <input id="description" style={{margin:10,padding:10}} type="text" placeholder="description"></input><br />
        <button style={{margin:10,padding:10}} onClick={()=>{
            fetch("https://localhost3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:document.getElementById("title").innerHTML,
                    description:document.getElementById("description").innerHTML
                })
            })
        }}>add todo</button>
    </div>
}