import React, { useState } from 'react'
import { LuCircleDashed ,LuCircleCheckBig} from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { use } from 'react';


export const TodoList = ({ title, description,key }) => {
  const [status,setStatus] = useState("pending")
  const [isCompleted, SetIsCompleted] = useState(false);
  const [deleteTask, setDeleteTask] = useState()
  const clickHandler = ()=>{
    SetIsCompleted(prev => !prev);
    setStatus((prevState)=>{return (prevState === 'pending' ? 'complete' : 'pending')})
    
    
  }
  
  return (
    <div
      className={`p-4 mb-4 flex items-center justify-between rounded-lg shadow-md ${isCompleted ? 'bg-green-100' : 'bg-white'} hover:bg-gray-200 cursor-pointer`}
      
    >
<div>
  <div className='flex gap-x-1.5 items-center' onClick={clickHandler}>
        {isCompleted ? (
          <LuCircleCheckBig className="text-green-500 text-2xl" />
        ) : (
          <LuCircleDashed className="text-gray-500 text-2xl" />
        )}
        <p className={`${isCompleted ? 'line-through text-gray-500' : 'text-lg font-semibold'}`}>{title} </p>
      </div>
      <p className={`${isCompleted ? 'line-through text-gray-400' : ''} text-sm mt-2`}>{description}</p>
    </div>

    <div className=' flex text-gray-500 text-2xl gap-3'>
        <FiEdit onClick={clickHandler}/>
        <MdDeleteOutline onClick={clickHandler} />
    </div>
      
    </div>
  );
};

