import React , {useState} from 'react'
import axios from 'axios';

 const Input = () => {

    const [input, setInput] = useState("");
    const [tasks, setTask] = useState([]);
    const handleInput =(e)=> {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    const addTask = ()=> {
        setTask([...tasks, input]);
        // console.log(tasks);
        setInput('');
    }
// console.log(tasks);
  const [data, setData] = useState({
    name : "",
    fullname: "",
  });

const fetchData =()=> {
  axios.get('http://nodeawstest-env.eba-pjardzyk.ap-southeast-1.elasticbeanstalk.com/testobj').then(res=> {
    setData({
      ...data, name: res.data.name, fullname: res.data.fullname
    });
      console.log(res.data.name);
  }).catch((e)=> {
      console.log(e);
  })
}



  return (
    <div>

    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", width: "400px"}}>
            <input value={input} onChange={handleInput} type="text" /> 
            <button onClick={addTask}>Add Task</button>
            <button onClick={fetchData}>Get Data</button>
            
            
    </div>
    <div>
      <h1>{ data.name } </h1>
      <h2>{ data.fullname}</h2>
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
