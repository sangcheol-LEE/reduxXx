import React,{useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../action';
import Todo from './Todo';


const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value)
  },[setText])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText("")
  },[text,dispatch])

  return (
    <>
      <h1> To Do </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>add</button>
      </form>

      <ul>
        <Todo state={state}/>
      </ul>
    </>
  );
};

export default Home;