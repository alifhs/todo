import React , {useState, useEffect} from 'react'
import Output from './Output'
import axios from 'axios'


 const Input = () => {

    const [input, setInput] = useState("");
    const [tasks, setTask] = useState([]);
    const [count, setCount] = useState(0);
    

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    const clickCount = () => {
      setCount(count + 1);
    }

    const handleInput =(e)=> {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    const addTask = ()=> {
        setTask([...tasks, input]);
        setInput('');
    }

  const [data, setData] = useState({
    name: "",
    fullName: ""
  });

    const fetchData =()=> {
      axios.get('http://nodeawstest-env.eba-pjardzyk.ap-southeast-1.elasticbeanstalk.com/testobj').then(res=> {
          console.log(res.data);
          setData({
            ...data, name: res.data.name, fullName: res.data.fullname
          });
      }).catch((e)=> {
          console.log(e);
      })
  }


  return (
    <div>

    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", width: "400px"}}>
            <input value={input} onChange={handleInput} type="text" /> 
            <button onClick={addTask}>Add Task</button>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={clickCount}>Click Me</button>
            
    </div>
     {/* <p>{input}</p> */}
     {
         tasks.map((task, index)=> {
             return(
                <p key={index}>{index+1}. {task}</p>
             )
            
         })
     }
     {<p>{data.name}</p>}
     {<p>{data.fullName}</p>}
     {<p>You clicked {count} times</p>}

     <Output name="Output" setParent={setCount} count={count}/>

    </div>

    
  )
}

export default Input;
