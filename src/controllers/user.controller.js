import  userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllservice();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  /* if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalide Id"})
    }*/ // verificação feita no middlewares
  try {
    const user = req.user;
    /*if(!user) {
        return res.status(400).send({message: "User not found"})
    }*/ // verificação feita no middlewares
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one field for update" });
    }

    const { id, user } = req;

    /*   if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalide Id"})
    } */

    /*   const user = await userService.findByIdService(id); */

    /*  if(!user) {
        return res.status(400).send({message: "user nor found"})
    }
 */ // verificação feita no middlewares
    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );
    res.send({ message: "User sucessfully update!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };
