import React,{useState} from "react";

export function TodoForm(props) {

    const [text,setText] = useState("");

    function addText(event) {
        event.preventDefault();
        if (text) {
            props.saveItems(text);
            setText("");
        }
    }
    
    function getText(event) {
        const text = event.target.value;
        if(text != null || text != ""){
        setText(text);
        }
    }
    
return(
    <form>
        <input onChange={getText} type="text" placeholder='Text' value={text}></input>
        <button id="button" onClick={addText}>Save</button>
    </form>
    )
}

