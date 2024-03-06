import { User } from "../models/users.model.js";

async function UsersController (req, res){
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.render("index.ejs")
};

export default UsersController;