import AddToDo from './AddToDo';
import ShowList from './ShowList';
import { useState } from 'react';
const ToDo = () => {
    const [parentList, setParentList ] = useState(JSON.parse(localStorage.getItem('todoList')));
    const getList = (param) => {
        console.log("parentList",param);
        setParentList(param);
    }
    return (
        <>
            <div>
                {/* <ShowList myList={parentList}></ShowList> */}
                
            </div>
            {/* <div><AddToDo getToDoListInParent={getList}></AddToDo></div> */}
            This is the basic app to be deployed
            Purpose is to check for sso
        </>
    )
}
export default ToDo;