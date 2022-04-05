import React , {useState} from 'react'
import axios from 'axios';
import Child from './Child';

 const Input = () => {

   const [lists, updateList] = useState([
     {
       name: "Sakhawat Hossen",
       email: "sakhawathossen42@gmail.com"
     },
     {
      name: "John Wick",
      email: "johnwick@gmail.com"
    },
    {
      name: "Tom Hardy",
      email: "tomhardy@gmail.com"
    }
   ]);

   console.log(lists);

   const listsData = lists.map(({name, email}) => (
     <li key={name.replace(" ", "").toLowerCase()}>
       <Child
        allLists = {lists}
        updateList = {updateList}
        name = {name}
        email = {email}
       />
     </li>
   ));

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
    <div>
      
    <div className="App">
      <h1>Team Members ({listsData.length})</h1>
      <ul className="List">{listsData}</ul>
    </div>
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
