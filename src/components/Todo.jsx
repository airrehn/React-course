import './Todo.css'

function Todo({title}) {
    
    function delTodo() {
        console.log("5", title)
    }
  return (
    <div className='todo'>
      <p>{title}</p>
      <button onClick={()=>delTodo()}>delete</button>
    </div>
  );
}

export default Todo;
