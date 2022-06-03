import InputComponent from "../../components/input";
import { useState, useEffect } from "react";

const TodoPage = () => {
    const [allTodoData, setAllTodoData] = useState([])
    const [displayedTasks, setDisplayedTasks] = useState([])
    const [status, setStatus] = useState('all'); // 'all', 'active', 'completed'



    const inputDataHandler = (data) => {
        const tempInputData = [...allTodoData]
        tempInputData.push({ ...data })
        setAllTodoData(tempInputData);
    }

    const getIndex = (arr,rowItem) => {
        let index = -1;
        for(let i = 0; i<arr?.length;i++){
            if(arr[i].id === rowItem?.id){
                index = i;
                break;
            }
        }
        return index;
    }

    const checkBoxHandler = (e, rowItem) => {
        console.log('e, rowItem :>> ', e, rowItem);
        if (e.target.checked) {
            rowItem.status = "Completed"
        }
        else {
            rowItem.status = "Active"
        }
        const tempAllData = [...allTodoData];
        tempAllData[getIndex(tempAllData,rowItem )] = rowItem;
        setAllTodoData(tempAllData);
        console.log('rowItem :>> ', rowItem);
    }
   

    useEffect(() => {
        let tempAllTasks = [...allTodoData];
        if (status !== 'All') {
            tempAllTasks = allTodoData.filter(task => task.status === status)
        }
        console.log('tempAllTasks :>> ', tempAllTasks);
        setDisplayedTasks(tempAllTasks);
    }, [status, allTodoData])

    const changeFilterStatus = newStatus => {
        console.log('newStatus :>> ', newStatus);
        setStatus(newStatus)
    };


    return (
        <div style={{ textAlign: "center", }}>
            <InputComponent inputData={inputDataHandler} />
            <h2>All Items</h2>
            {displayedTasks.map((item, i) => <div key={item.id} style={{ border: "2px solid grey", backgroundColor: "#C8C8C8", maxWidth: "240px", margin: "0 auto", marginTop: "10px", borderRadius: "7px", padding: "7px", position: "relative" }}>
                <input type="checkbox" id={item.id} style={{ position: "absolute", left: "10px" }} checked={item.status === 'Completed'} onChange={(e) => checkBoxHandler(e, item)} />
                <label htmlFor={item.id}>{item.todoItem}</label>
            </div>

            )}
     
            <div style={{ marginTop: '20px', display: "flex", justifyContent: "space-between", margin: "0 auto", maxWidth: "250px",  borderRadius: "10px" }}>
                <button onClick={() => changeFilterStatus('All')}>
                    All
                </button>
                <button onClick={() => changeFilterStatus('Active')}>
                    Active
                </button>
                <button onClick={() => changeFilterStatus('Completed')}>
                    Completed
                </button>
            </div>
        </div>
    );
}
export default TodoPage;