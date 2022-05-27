import './App.css'
import { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import {List} from './components/List';
import Item from "./components/Item";

function App() {
  let savedItems = JSON.parse(localStorage.getItem("savedItems"));
  const [items, setItems] = useState(savedItems?savedItems:[]);

  function saveItems(text){
    let item = new Item(text);
    setItems([...items,item]);
  }

  useEffect(()=>{
    localStorage.setItem("savedItems",JSON.stringify(items));
  },[items])

  useEffect(()=>{
    if(savedItems){
        setItems(savedItems);
    }
 },[]);


  function deleteItem(item){
  let it = items.filter(it=>{return item.id != it.id})
  setItems(it);
  }

  function completedItem(item){
      let updatedItems = items.map(it=>{
        if(it.id === item.id){
          it.completed=!it.completed;
        }
        return it;
      })
      setItems(updatedItems);
  }
  return(
    <div className='container'>
      <TodoForm saveItems={saveItems}></TodoForm>
      <List completedItem={completedItem} deleteItem={deleteItem} items={items}></List>
    </div>
  )
}



export default App;