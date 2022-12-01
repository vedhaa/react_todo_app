import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {

  const [heading,setHeading] = useState("")
  const [description,setDesc] = useState("")
  const [show,setShow]=useState(false)
  const [todos,setTodos] = useState([])
  const [editIndex,setEditIndex]=useState() 

  const handleClick = () => { 
    if(heading.length!==0 && description.length!==0){

        const newTodo = {
          name:heading,
          description:description
        }

        setTodos(newData => [...newData,newTodo])
        setHeading("")
        setDesc("")
      
      }
  }


  const handleDelete=(index)=>{
        todos.splice(index,1)
        setTodos([...todos])
    }

  const handleEdit = (index)=>{
        setHeading(todos[index].name)
        setDesc(todos[index].description)
        setShow(true)
        setEditIndex(index)
    }
  
  const handleUpdate=()=>{

       if(heading.length!==0 && description.length!==0){
       const editTodo = {
          name:heading,
          description:description
        }

        todos.splice(editIndex,1,editTodo)
        setTodos([...todos])
        setHeading("")
        setDesc("")
        setShow(false)

        }
    }
    


  const submitHandler = e => {
    e.preventDefault()
  }

  return  (

   <div className="container text-center">
    <div className="d-flex justify-content-center">
    <div className="col-6">

    <h3>To do list</h3>

    <div className="break" />

      <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label  className="form-label">Heading</label>
            <input type="text" 
            className="form-control"
            value={heading} 
            onChange={(e)=>setHeading(e.target.value)} 
             />
          </div>
          
          <div className="mb-3">
            <label  className="form-label">Comments</label>
            <textarea className="form-control" 
            value={description} 
            onChange={(e)=>setDesc(e.target.value)} 
            rows="3"></textarea>
          </div>

            { !show ?
          <div className="col-auto">
            <button 
             className="btn btn-primary mb-3"
             onClick={handleClick}
             >
             Add ToDo</button>
          </div>
          :

           <div className="col-auto">
            <button 
             className="btn btn-primary mb-3"
             onClick={handleUpdate}
             >
             Update ToDo</button>
          </div>

          }
      </form>
  
    </div>

      

    <div className="col-6">
          <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>



    </div>
    </div>

    )
}

export default App;
