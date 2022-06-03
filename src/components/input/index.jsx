import { useState } from "react";



const InputComponent=(props)=>{
    const [inputDataSet, setInputDataSet]= useState("")
    const submitHandler=()=>{
        if(!inputDataSet) return;
        const tempInputedDataObject={
            id:Date.now(),
            todoItem:inputDataSet,
            status:"Active"
        }
        props.inputData(tempInputedDataObject);
        setInputDataSet("");
    }
    







    return (
        <>
            <input type="text" placeholder="insert Todos" onChange={(e) => setInputDataSet(e.target.value)} value={inputDataSet}/><br />
            <button type="submit" style={{ marginTop: "10px" }} onClick={submitHandler}>Submit</button>



        </>
);

}
export default InputComponent;