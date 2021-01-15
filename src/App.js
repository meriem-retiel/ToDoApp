
import './App.css';
import React, { useState,useEffect } from "react"
import {Grid} from  '@material-ui/core'
// import components 
import Form from "./component/Form"
import TodoList from "./component/TodoList"
function App() {

 const [inputText , setInputText] = useState("");
  const [todo, setTodo]= useState([]);
  const [completed, setCompleted]= useState("all");
const [filterTodo, setFilterTodo]= useState([]);


useEffect(()=> filterHandler(),[completed]);
useEffect(()=> filterHandler(),[todo]);
const filterHandler = () => {
  switch (completed) {
    case 'completed' :
      setFilterTodo(todo.filter(item=> item.completed===true));
      break;
    case 'uncompleted' :
      setFilterTodo(todo.filter(item=> item.completed===false));
      break;
    default :
    setFilterTodo(todo);
      break;

  }

};


  return (
    <Grid xs={12} sm={6} >
      <header>
       <h1> Meriem's TODO List</h1>
      </header>
      <Form  setCompleted ={setCompleted} completed={completed} inputText={inputText}  todo={todo} setTodo={setTodo}  setInputText={setInputText} />
      <TodoList setFilterTodo={setFilterTodo} filterTodo={filterTodo}  filterTodo={filterTodo} completed ={completed} todo={todo} setTodo={setTodo}  />
    </Grid>
  );
}

export default App;
