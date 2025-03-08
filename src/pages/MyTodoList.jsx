import React, { useEffect, useState } from 'react';
import { TodoList } from '../components/TodoList';
import { showALLTodoFn } from '../service/operations/task';
import toast from 'react-hot-toast';

export const MyTodoList = () => {
  const [todos, setTodo] = useState([]);

  const fetchAllTodo = async () => {
    try {
      const {data} = await showALLTodoFn();
      
      if (data.tasks && Array.isArray(data.tasks)) {
        setTodo(data.tasks);
        toast.success("Todos fetched successfully");
      } else {
        toast.error("No todos found.");
      }
    } catch (error) {
      toast.error("Failed to fetch todos. Please try again.");
    }
  };
  const handleDelete = (id) => {
    // Filter out the deleted todo by id
    setTodo(todos.filter(todo => todo._id !== id));
  };

  useEffect(() => {;
    fetchAllTodo();
  }, []);

  return (
    <div className="max-w-lg min-w-[780px] mx-auto mt-8">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoList
            title={todo.title}
            key={todo._id}
            id={todo._id}
            description={todo.description}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <div>
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};
