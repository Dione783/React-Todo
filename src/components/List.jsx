import React from "react";

function Returncompleted(props){
    if(props.element.completed){
        return <button onClick={() => { props.completedItem(props.element) }}>Completed</button>
    }else{
        return <button onClick={() => { props.completedItem(props.element) }}>Uncompleted</button>
    }
}

export function List(props) {
    if (props.items.length <= 0) {
        return <p>Adicione algo a Lista</p>
    } else {
        return (
            <ul>
                {props.items.map(element => {
                    return (
                    <div key={element.id}>
                        <li className={element.completed?"done":""}>{element.text}</li>
                       <button onClick={() => props.deleteItem(element)}>X</button>
                        <Returncompleted completedItem={props.completedItem} element={element}></Returncompleted>
                        </div>)
                })}
            </ul>)
    }
}