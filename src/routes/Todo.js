import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../action';
const Todo = ({state}) => {
  const dispatch = useDispatch()

  return (
    <>
      {
          state && state?.map((item, idx) => {
            console.log(item)
            return (
              <div key={idx} style={{display: "flex",alignItems:"center", marginBottom: "10px"}}>
                <li style={{marginRight: "10px"}} >{item.type}</li>
                <button onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
              </div>
            )
          })
        }
    </>
  );
};

export default Todo;