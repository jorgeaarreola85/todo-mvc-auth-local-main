const Todo = require("../models/Todo");

module.exports = {
  getEdit: async (req, res) => {
    try {
      // console.log(req.user)
      const id = req.params.id;
      const todoItems = await Todo.find({ userId: req.user.id });
      // console.log(todoItems)
      res.render("edit.ejs", { todoTasks: todoItems, idTask: id });
    } catch (err) {
      console.log(err);
    }
  },
  deleteTask: (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  },
  updateTask: (req, res) => {
    const id = req.params.id;
    // console.log(req.body.dueDate)
    Todo.findByIdAndUpdate(
      id,
      {
        todo: req.body.todo,
        dueDate: req.body.dueDate,
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/todos");
      }
    );
  },
};
