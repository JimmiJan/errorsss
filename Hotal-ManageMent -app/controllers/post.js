const TodoModel = require("../models/todoSchema");

const hotal = (req, res) => {
  const { hotal, cityname, hotalrent } = req.body;

  if (!hotal || !cityname || !hotalrent) {
    return res.json({ message: "Required field are missing" });
  }
  TodoModel.create(req.body, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
  res.send("api hit")
};

const hotalGet = async (req, res) => {
  try {
    const todo = await TodoModel.find({}).sort({
      created_on: "-1",
    });
    res.send(todo);
  } catch (error) {
    res.send("product not found", error);
  }
};

const upateHotal = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //   console.log(id);
  //   console.log(body);

  //   TodoModel.updateOne({ _id: id }, req.body, (err, data) => {
  //     if (err) {
  //       res.send("error", err);
  //     } else {
  //       res.send(data);
  //     }
  //   });
  TodoModel.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
  // res.send("api hiiiiii")
};

const deleteHotal = (req, res) => {
  const { id } = req.params;

  console.log(id);

  TodoModel.deleteOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

module.exports = {
  hotal,
  hotalGet,
  upateHotal,
  deleteHotal,
};
