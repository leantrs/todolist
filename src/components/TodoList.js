import React, { useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {useSelector, useDispatch} from 'react-redux'
import { COUNTER_KEY } from "../redux/counterRedux/counter.reducer";
import { increaseCounter, decreaseCounter } from "../redux/counterRedux/counter.actions";




function TodoList() {
  
    const [todos, setTodos] = useState([]);
    
    const[conc,setConc] = useState(0)
    const[nconc,setNconc] = useState(0)

    let dispatch = useDispatch()
   
    let increaseBtn = () =>{
        dispatch(increaseCounter())
    }   
    
    let decreaseBtn = () =>{
        dispatch(decreaseCounter())
    }
       
    let viewCounter = useSelector((state) =>{
      return state[COUNTER_KEY]
     })
     
    useEffect(
    () => {
     krn();          
     
    }, // eslint-disable-next-line
    []
  );

  const addTodo = todo => {
       const armazenar = JSON.stringify(todo);
       localStorage.setItem(todo.id, armazenar);
        increaseBtn()
    krn()
 }; 
 
 
 const updateTodo = (id, newValue) => {
     
    const item = {
      id,
      text:newValue.text,
      isComplete: false
    };

    const armazenar = JSON.stringify(item);
    localStorage.setItem(id, armazenar);
    krn();
  };

  
  const removeTodo = id => {
    localStorage.removeItem(id);
     decreaseBtn()
    krn()
  };

 
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        
        const bsc = JSON.parse(localStorage.getItem(id));

        if(bsc.isComplete === false){
          bsc.sts = true
        }else{
          bsc.sts = false  
        }

        const mdn = {
          id: bsc.id,
          text:bsc.text,
          isComplete: bsc.sts
        };

        const armazenar = JSON.stringify(mdn);
        localStorage.setItem(todo.id, armazenar);
        krn()
      }
      
      return todo;
    });
    setTodos(updatedTodos);
    
  };
  
    async function krn() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);

     
    function checkar(k) {
      return k !== "#";
    }
    const newTodos =  rec.map((item) => {
          return JSON.parse(localStorage.getItem(item));
    });
    
    let num = 0;
    let numc = 0;

    // eslint-disable-next-line 
    newTodos.map((item) => { 
      if (item.isComplete === true) {
         num++
      }else{
         numc++
      }
    });
  
   setConc(num)
   setNconc(numc)
   setTodos(newTodos);
 
  }
  

  return (
    <>
      <h1>Todo list</h1>
      <p className="dot">
        Total de tarefas:  {viewCounter.count}
           </p>
      <p className="dot">
        Total de tarefas Concluidas:  {conc}
      </p>
      <p className="dot">
        Total de tarefas não Concluidas:  {nconc}
      </p>
     
      <TodoForm onSubmit={addTodo} /> 
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
