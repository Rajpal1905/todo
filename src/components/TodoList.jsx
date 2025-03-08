import React, { useEffect, useState } from 'react'
import { LuCircleDashed, LuCircleCheckBig } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { changeStatusTodoFn, deleteTodoFn } from '../service/operations/task';
import toast from 'react-hot-toast';


export const TodoList = ({ title, description, id,onDelete  }) => {
  const [status, setStatus] = useState("pending")


  const changeStatusHandler = async () => {
    const newStatus = status === 'pending' ? 'completed' : 'pending';
    setStatus(newStatus);
    try {
      const { data } = await changeStatusTodoFn(id, newStatus);
      if(data.success){
        toast.success("Status Changed")
      }
    } catch (error) {
      console.error("Error changing status:", error);
    }
  }

  const deleteHandler = async() => {
    try {
      const res = await deleteTodoFn(id)
      if(res.data){
        toast.success("Deleted successfully")
        onDelete(id)
      }
    } catch (error) { 
      toast.error("Error While Deleting Todo")
    }
  }
  const updateHandler = () => {

  }


  return (
    <div
      className={`p-4 mb-4 flex items-center justify-between rounded-lg shadow-md ${status === "completed" ? 'bg-green-100' : 'bg-white'} hover:bg-gray-200 cursor-pointer`}
    >
      <div>
        <div className='flex gap-x-1.5 items-center' onClick={changeStatusHandler}>
          {status === "completed" ? (
            <LuCircleCheckBig className="text-green-500 text-2xl" />
          ) : (
            <LuCircleDashed className="text-gray-500 text-2xl" />
          )}
          <p className={`${status === "completed" ? 'line-through text-gray-500' : 'text-lg font-semibold'}`}>{title} </p>
        </div>
        <p className={`${status === "completed" ? 'line-through text-gray-400' : ''} text-sm mt-2`}>{description}</p>
      </div>

      <div className=' flex text-gray-500 text-2xl gap-3'>
      <div onClick={updateHandler}>

        <FiEdit  />
      </div>
        <MdDeleteOutline onClick={deleteHandler} />
      </div>

    </div>
  );
};

