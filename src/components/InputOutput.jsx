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
  const input = sentenceCase(inputValue);
  if (input !== "" && input.length > 5 && input.length < 31) {
   setTodos([...todos, input]);
   setInputValue('');
  } else {
   return alert("Can not add your todo, because text length is either too short or too long.");
  }
 };


 const editTodo = (index) => {
  const editTodoAlert = confirm("Do you want to edit this todo?");
  if (editTodoAlert) {
   const promptText = prompt("Edit todo:")
   const newTodo = sentenceCase(promptText);
   if (newTodo !== "" && newTodo !== null && newTodo !== "" && newTodo.length > 5 && newTodo.length < 31) {
    const updatedTodo = [...todos];
    updatedTodo[index] = newTodo;
    setTodos(updatedTodo);
   } else {
    return alert("Can not save your todo, because text length is either too short or too long.");
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


 const sentenceCase = (word) => {
  const input = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  const output = input.trim()
  return output;
 };


 return (
  <>

   <div className="container">

    <div id="inputTag">

     <div className="inputField">
      <label htmlFor={props.label}>{props.label}: </label>
      <input type="text" id={props.label} value={inputValue} onChange={inputChange} placeholder={props.placeholder}
      />
      <br /> <br />
      <TextLength length={inputValue.length} />
     </div>

     <button id="addBtn" onClick={addTodo}>Add</button>

    </div>

    <div id="outputTag">
     <h2>My Todo List</h2>
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

   </div>
  </>
 )
}