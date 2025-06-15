import { useState } from 'react'
import { Createtodo } from './component/createtodo'
import { Todos } from './component/todos'
function App() {
  const [todos, settodos] = useState([]);

  return (
    <div>
   <Createtodo></Createtodo>
   <Todos todos={todos}></Todos>
   </div>
  )
}

export default App
