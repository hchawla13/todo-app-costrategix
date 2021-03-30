import { useEffect, useState } from "react";


const ShowList = (props) => {
    const [list,setList] = useState(props.myList);
    // useEffect(()=>{
    //     console.log("props.myList",props.myList);
        
    // },[props.myList])
    
    const deleteItem = (id) => {
        const newList = list.filter((item)=>{return item.id === id});
        setList(newList)
        console.log("newList after deleting",newList);
        localStorage.setItem('todoList',newList)
    }
    return (
        <>
            {list ? list.map((item)=>{
                return(
                    <div>
                        <span key={item.name} className="item">{item.name}</span>
                        <span key={item.name + item.category} className="item">{item.category}</span>
                        <button onClick={()=>{deleteItem(item.id)}}>delete</button>
                    </div>
                )
                
            }) : []}
        </>
    )
}
export default ShowList;