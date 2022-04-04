import React , {useState} from 'react'

 const Input = () => {

    const [input, setInput] = useState("");
    const [tasks, setTask] = useState([]);
    const handleInput =(e)=> {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    const addTask = ()=> {
        setTask([...tasks, input]);
        setInput('');
    }

  return (
    <div>

    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", width: "400px"}}>
            <input value={input} onChange={handleInput} type="text" /> 
            <button onClick={addTask}>Add Task</button>
            
    </div>
     {/* <p>{input}</p> */}
     {
         tasks.map((task, index)=> {
             return(
                <p key={index}>{index+1}. {task}</p>
             )
            
         })
     }

    </div>
  )
}

export default Input;
