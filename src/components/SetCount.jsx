import { useState } from "react"
import './SetCount.css'


const SetCounter = () => {

 const [count, addCount] = useState(0);

 return (
  <>

   <div>
    <h1>Counter Button</h1>
   </div>

   <div id="btn">
    <button onClick={() => addCount(num => num - 1)}>-</button>
    <h2>{count}</h2>
    <button onClick={() => addCount(num => num + 1)}>+</button>
   </div>

   <div>
    <button onClick={() => addCount(num => num = 0)}>Reset</button>
   </div>

  </>
 )
}

export default SetCounter