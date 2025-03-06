import React, { useState } from "react";
import toast from "react-hot-toast";
import Calendar from "react-calendar";

export const CreateTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: new Date(), 
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChange = (date) => {
    // Update the selected date in formData
    setFormData({ ...formData, date });
  };

  function submitHandler(e) {
    e.preventDefault();
    if (formData.title.trim() && formData.description.trim()) {
      console.log("New Todo:", formData);
      toast.success("Todo added successfully!");
      setFormData({ title: "", description: "", date: new Date() }); // Reset form data including the date
    } else {
      toast.error("Please fill in all fields!");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Add a New Todo
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter todo title"
              value={formData.title}
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter todo description"
              value={formData.description}
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div>
          <div className="text-gray-600 mt-2 mb-1 font-medium">
              Selected Date: 
              <p className=" border w-full px-1.5 py-1.5 tracking-widest rounded-lg cursor-not-allowed">
                {formData.date.toLocaleDateString()}
              </p> 
            </div>
            <label className="block text-gray-600 font-medium mt-3">Select Date:</label>
            <Calendar className='border px-1.5 py-7 mt-1 rounded-lg font-medium text-gray-600 tracking-wider ' onChange={onChange} value={formData.date} />
            {/* Show the selected date */}
            
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
