import logo from './logo.svg';
import './App.css';
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1> 
      <div style={{display : "flex", justifyContent: "center", alignItems: "center"}}> 
        <Input />

      </div>
      
    </div>
  );
}

export default App;
