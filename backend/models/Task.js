const mongoose = require('mongoose');

const schema = mongoose.Schema;

const TaskSchema = new schema({
  title: {
    type: String,
    required: true, 
    trim: true, 
    maxlength: 255, 
  },
  description: {
    type: String, 
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending", 
  },
  dueDate: {
    type: Date,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: "User", 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  updatedAt: {
    type: Date, 
    default: Date.now,
  },
});

TaskSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
