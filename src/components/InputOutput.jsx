import { useState } from "react";


export const Input = (props) => {

 const [todos, setTodos] = useState([]);

 const [inputValue, setInputValue] = useState('');

 const inputChange = (e) => {
  setInputValue(e.target.value);
 };

 const addTodo = () => {
  if (inputValue.trim() !== '') {
   setTodos([...todos, inputValue]);
   setInputValue('');
  }
 };

 const editTodo = (index) => {
  const newTodo = prompt("Edit todo:");
  if (newTodo !== "" && newTodo !== null) {
   const updatedTodo = [...todos];
   updatedTodo[index] = newTodo.trim();
   setTodos(updatedTodo)
  }
 }

 const deleteTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
 };

 return (
  <>
   <div>

    <label htmlFor={props.label}>{props.label}: </label>
    <input type="text" id={props.label} value={inputValue} onChange={inputChange} placeholder={props.placeholder}
    />
    <button onClick={addTodo}>Add</button>

   </div>

   <div>

    <ol>
     {todos.map((todo, index) => (
      <li key={index}>
       {todo}
       <button onClick={() => editTodo(index)}>Edit</button>
       <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
     ))}
    </ol>

   </div>

  </>
 )
}