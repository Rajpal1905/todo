import React from 'react'
import { TodoList } from '../components/TodoList'
const todos = [
  { task: "Morning Routine", description: "Wake up, make the bed, have breakfast, and get ready for the day.", time: "7:00 AM - 8:00 AM" },
  { task: "Respond to Emails", description: "Check inbox for any important messages, prioritize responses, and clear out unnecessary emails.", time: "8:30 AM - 9:00 AM" },
  { task: "Team Meeting", description: "Join the weekly team meeting to discuss project updates, blockers, and goals for the week.", time: "10:00 AM - 11:00 AM" },
  { task: "Complete Client Report", description: "Finalize the report on client performance, adding necessary data and insights before submission.", time: "1:00 PM - 3:00 PM" },
  { task: "Grocery Shopping", description: "Create a shopping list, head to the store, and pick up necessary ingredients for the week.", time: "4:00 PM - 5:00 PM" },
  { task: "Workout", time: "5:30 PM - 6:30 PM" },
  { task: "Dinner with Family", description: "Prepare and enjoy dinner together, catching up on each other's day.", time: "7:00 PM - 8:00 PM" },
  { task: "Plan Tomorrow’s Tasks", description: "List tasks for the next day, set loremaasdfghjnjyshknmcd dx dcknbdvnbdhjhvnmdbvkjdbvkjdbvjkdhmnadhbnmadhnmchqsdnmchqsdnmdcb priorities, and organize schedules to ensure smooth workflow.", time: "8:30 PM - 9:00 PM" },
  { task: "Read for 30 Minutes", description: "Wind down by reading a book or article to relax before bedtime.", time: "9:30 PM - 10:00 PM" },
  { task: "Nighttime Routine", description: "Brush teeth, wash face, and prepare for bed to ensure a restful night.", time: "10:00 PM - 10:30 PM" }
];

export const MyTodoList = () => {
  return (
    <div className="max-w-lg min-w-[780px] mx-auto mt-8">
      {todos.map((todo, index) => (
        <TodoList title={todo.task} key={index} description={todo.description} />
      ))}
    </div>
  );
};

