const TodoModel = require("../model/TodoModel");


// todo create system
exports.createTodo = async (req, res) => {
    try {
        let email = req.headers["email"];
        let reqBody = req.body;
        reqBody.email= email;


        await TodoModel.create(reqBody);
         res.json({ status: "success", message: "Todo created complate" });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
  };





  // todo read system
exports.readTodo = async (req, res) => {
    try {
        let email = req.headers["email"];
        let data =await TodoModel.find({email:email});
        res.json({ status: "success", data: data});
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
  };



  // todo update system
exports.updateTodo = async (req, res) => {
    try {
        let email = req.headers["email"];
        const {id} = req.params;
        let reqBody = req.body;
        await TodoModel.updateOne({_id:id, email:email},reqBody);
        res.json({ status: "success", message: "Todo Update complate" });
    } catch (error) {
         res.json({ status: "fail", message: error });
    }
  };


  // todo delete system
exports.deleteTodo = async (req, res) => {
    try {
        let email = req.headers["email"];
        const {id} = req.params;
        await TodoModel.deleteOne({_id:id, email:email});
        res.json({ status: "success", message: "Todo delete complate" });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
  };