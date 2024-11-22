import {useState} from "react"

const Input = ({taskList, settaskList})=> {
    const [input,setinput] = useState("")

    const handleAddTask = (e)=>{
        e.preventDefault();
        settaskList([...taskList, input]);
        setinput("");
    }
    return(
        <>
        <h1>Add a Task</h1>
        
        <form className="flex flex-row items-center gap-3">
            <input
            className="border rounded-lg py-1.5 px-2.5 text-lg"
            type="text"
            placeholder="Add a task"
            value = {input}
            onChange={(e)=> setinput(e.target.value)}
            
            />
            <button 
            className="bg-violet-400 text-white py-2 px-3.5 rounded-lg
            font-semibold hover:opacity-70"
            onClick={handleAddTask}>Add</button>
            
            
            
           
        </form>
        </>
    )
}

export default Input;

