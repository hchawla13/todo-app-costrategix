import { useState } from "react"

const AddToDo = (props) => {
    const minimum = 1,maximum = 100;
    const [category, setCategory ] = useState('default');
    const [ toDoItem, setToDoItem ] = useState('');
    const addItem = () => {
        let list = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
        const obj = {
            name :toDoItem,
            category,
            id:(Math.random() * (maximum - minimum + 1) ) << 0
        }
        list.push(obj)
        localStorage.setItem('todoList',JSON.stringify(list));
        props.getToDoListInParent(list)
        setToDoItem('');
        setCategory('default');
    }
    const changeText = (event,type) =>{
        switch (type){
            case 'todo':
                setToDoItem(event.target.value);
                break;
            case 'category':
                setCategory(event.target.value);
                break;
            default:
                console.log("default")
        }
        

    }
    
    return (
        <>
            <input type="text" value={toDoItem} onChange={(e)=>{changeText(e,'todo')}}></input>
            <input type="text" value={category} onChange={(e)=>{changeText(e,'category')}}></input>
            <button onClick={()=>{addItem()}}>Add Item</button>
        </>
    )
}
export default AddToDo;