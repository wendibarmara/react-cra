import { useState }  from "react"
function Todo()
{
  const [activity,setActivity]=useState('')
  const [todos,setTodos]=useState([])
  const [edit,setEdit]=useState({})
  const [message,setMessage]=useState('')
  function saveTodoHandler(event)
  {
   event.preventDefault();
    if(!activity)
    {
      return setMessage('Nama Aktivitas jangan kosong')
    }
    setMessage('')

   if(edit.id)
   {
    const updatedTodo={
      //id:edit.id,
      ...edit,
      activity

    }
    console.log(updatedTodo)
    const editTodoIndex=todos.findIndex(function(todo)
    {
      return todo.id===edit.id
    })
    console.log(editTodoIndex)
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex]=updatedTodo;
    console.log(todos)
     setTodos(updatedTodos)
    return cancelEditHandler()

   // return;
  }
   //console.log(activity);
  //setTodos([...todos,activity])
  
  setTodos([...todos,
  {
    id:generateId(),
    //activity:activity,
    activity,
    done:false
  }
  ])
  
  setMessage('')
  setActivity('')
  console.log(todos)
  }
  function generateId()
  {
    return Date.now();
  }
  function editTodoHandler(todo)
  {
//    console.log(todo)
setActivity(todo.activity)
setEdit(todo)
}
  function cancelEditHandler()
  {
console.log('cancel edit')
    setEdit({});
setActivity('')
  }
function doneTodoHandler(todo)
{

//console.log(todo)
const updatedTodo={
 // id:todo.id,
  //activity:todo.activity,
  ...todo,
  done:todo.done ? false : true
}
const editTodoIndex = todos.findIndex(function(currentTodo)
{
  return currentTodo.id===todo.id
})
const updatedTodos=[...todos];
updatedTodos[editTodoIndex]=updatedTodo
setTodos(updatedTodos)
//console.log(updatedTodos)
}


  function removeTodoHandler(todoId)
  {
  //  console.log(todoId)
    const filteredTodos=todos.filter(function (todo)
    {
      return todo.id !==todoId
    })
    setTodos(filteredTodos)
    if(edit.id) cancelEditHandler()
}
return (
<div>
<h1>Simple Todo List </h1>
{message && <div style={{color:'red'}}>{message}</div>}

<form onSubmit={saveTodoHandler}>
  <input type="text" placeholder='Nama Aktifitas' 
  value={activity}
  onChange={function(event)
  {
    setActivity(event.target.value)
  }}/>
  <button type="submit">{edit.id ? 'Simpan Perubahan':'Tambah'}</button>
  {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>
}
    </form>
    {todos.length > 0 ? (
<ul>
{todos.map(function(todo)
  {
    return <li key={todo.id}><input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this,todo)}/>{todo.activity}({todo.done ? 'Selesai':'Belum selesai'})<button onClick={editTodoHandler.bind(this,todo)}>Edit</button><button onClick={removeTodoHandler.bind(this,todo.id)}>Hapus</button></li>
    
  })}
</ul>
    ):(
      <p><i>Tidak ada todo</i></p>
    )}
</div>
)
}
export  default Todo