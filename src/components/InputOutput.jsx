import { useState } from "react";
import './InputOutput.css';
import TextLength from "./TextLength";


export const Input = (props) => {

 const [todos, setTodos] = useState([]);

 const [inputValue, setInputValue] = useState('');

 const inputChange = (e) => {
  setInputValue(e.target.value);
 };

 const addTodo = () => {
  if (inputValue !== "" && inputValue.length > 5 && inputValue.length < 21) {
   setTodos([...todos, inputValue.trim()]);
   setInputValue('');
  } else {
   return alert("Can not add your todo, because text length is either too short or too long.");
  }
 };

 const editTodo = (index) => {
  const editTodoAlert = confirm("Do you want to edit this todo?");
  if (editTodoAlert) {
   const newTodo = prompt("Edit todo:");
   if (newTodo !== "" && newTodo !== null) {
    const updatedTodo = [...todos];
    updatedTodo[index] = newTodo.trim();
    setTodos(updatedTodo);
   }
  }
 }

 const deleteTodo = (index) => {
  const deleteAlert = confirm("Are you sure?");
  if (deleteAlert) {
   const newTodos = [...todos];
   newTodos.splice(index, 1);
   setTodos(newTodos);
  }
 };

 return (
  <>
   <div id="inputTag">

    <div className="inputField">
     <label htmlFor={props.label}>{props.label}: </label>
     <input type="text" id={props.label} value={inputValue} onChange={inputChange} placeholder={props.placeholder}
     />
     <br />
     <TextLength length={inputValue.length} />
    </div>

    <button id="addBtn" onClick={addTodo}>Add</button>

   </div>

   <div id="outputTag">
    <h3>My Todo List</h3>
    <ol>
     {todos.map((todo, index) => (
      <li id="todoLi" key={index}>
       {todo}
       <br />
       <button className="todoFnBtn firstBtn" onClick={() => editTodo(index)}>Edit</button>
       <button className="todoFnBtn" onClick={() => deleteTodo(index)}>Delete</button>
      </li>
     ))}
    </ol>

   </div>

  </>
 )
}