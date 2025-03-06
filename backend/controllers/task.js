const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    const userId =  req.user.id ;

    if (!title) {
      return res.status(400).json({
        success: false,
        msg: "Title is required to create a task",
      });
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "User not authenticated. Token is required.",
      });
    }

    const newTask = await Task.create({
      title,
      description,
      dueDate,
      userId,
    });

    return res.status(201).json({
      success: true,
      msg: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Error while creating task:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while creating the task",
      error: error.message,
    });
  }
};


exports.getAllTasks = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "Authentication required. Please log in.",
      });
    }

    const tasks = await Task.find({ userId });

    if (tasks.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "No tasks found for the current user.",
      });
    }

    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    console.error("Error while fetching tasks:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while fetching tasks.",
      error: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const {taskId} = req.body;
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "Authentication required. Please log in.",
      });
    }

    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: "Task not found or you are not authorized to delete this task.",
      });
    }

    await task.deleteOne();

    return res.status(200).json({
      success: true,
      msg: "Task deleted successfully.",
    });
  } catch (error) {
    console.error("Error while deleting task:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while deleting the task.",
      error: error.message,
    });
  }
};


exports.changeStatus = async (req, res) => {
  try {
    const {taskId} = req.body;
    const { status } = req.body;
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "Authentication required. Please log in.",
      });
    }

    if (!status || !['pending', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid status. The status must be either 'pending' or 'completed'.",
      });
    }
    
    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: "Task not found or you are not authorized to update this task.",
      });
    }

    task.status = status;
    await task.save();

    return res.status(200).json({
      success: true,
      msg: "Task status updated successfully.",
      task,
    });
  } catch (error) {
    console.error("Error while changing task status:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while updating the task status.",
      error: error.message,
    });
  }
};



exports.updateTask = async (req, res) => {
  try {
    const {taskId} = req.body;
    const { title, description, dueDate, status } = req.body;
    const userId = req.user.id ;

    if (!userId) {
      return res.status(401).json({
        success: false,
        msg: "Authentication required. Please log in.",
      });
    }
    // console.log(taskId , "--" , userId)

    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: "Task not found or you are not authorized to update this task.",
      });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (dueDate) updateData.dueDate = dueDate;
    if (status) updateData.status = status;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId, userId },
      updateData,
      { new: true }  
    );

    return res.status(200).json({
      success: true,
      msg: "Task updated successfully.",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error while updating task:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while updating the task.",
      error: error.message,
    });
  }
};
