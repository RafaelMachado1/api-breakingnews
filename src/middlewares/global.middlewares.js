import mongoose from "mongoose";
import  userService  from "../services/user.service.js";

export const validId = (req, res, next) => {
  //verificação
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalide Id" });
    }

    next(); //se não for invalid ele ele segue para pasta use.controller e atua na função que está em execução

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
  
};

export const validUser = async (req, res, next) => {
  //verificação
  try {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next(); //se não for invalid ele ele segue para pasta use.controller e atua na função que está em execução
    
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
  
};

//export default { validId, validUser };
