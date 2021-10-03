import UserData from "../database/data/User";

class userController {
  static async getUserById(req, res, next) {
    try {
      const userId = req.query.id;
      const user = await UserData.getUserById(userId);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async disablingUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await UserData.getUserById(userId);
      console.log(user)
      if (user.length === 0) 
        return res.status(400).json({ error: "no user found" });
      else 
      await UserData.disableUserById(userId);
      return res.status(200).json({ message: "activeeeee" });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async updatingUser(req, res, next) {
    try {
      const userId = req.params.id;
      const data = req.body;
      const user = await UserData.getUserById(userId);
      console.log("hellloooo")
      console.log(user)
      if (user.length === 0)
        return res.status(400).json({ error: "This  user can't be found!" });
        else
     await UserData.updatingUser(userId, data);
      return res.status(200).json({message:"Update user"});
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserByEmail(req, res, next) {
    try {
      const email = req.query.email;
      const user = await UserData.getUserByEmail(email);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }

  static async getUserByStatus(req, res, next) {
    try {
      const input = req.query.status;
      const user = await UserData.getUserByStatus(input);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUsers(req, res) {
    try {
      const users = await UserData.getUsers();
      console.log(users);
      if (users.length === 0)
        return res.status(400).json({ error: "no users found" });
      else return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      // return next(new Error(err))
      return res.status(401).json({ message: "token expired!" });
    }
  }
  static async getUserByFirstname(req, res, next) {
    try {
      const input = req.query.firstname;
      const user = await UserData.getUserByFistname(input);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserByLastname(req, res, next) {
    try {
      const input = req.query.lastname;
      const user = await UserData.getUserByLastname(input);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserByGender(req, res, next) {
    try {
      const input = req.query.gender;
      const user = await UserData.getUserByGender(input);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserByLga(req, res, next) {
    try {
      const input = req.query.lga;
      const user = await UserData.getUserByLga(input);
      if (user.length === 0)
        return res.status(400).json({ error: "no user found" });
      else return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserByInput(req, res, next) {
    try {
      const input = req.query.input;
      const user = await UserData.getUserByInput(input);

      return res.status(200).json({ message: "the user", user });
    } catch (err) {
      return next(new Error(err));
    }
  }
 
  static async deleteUser(req, res, next) {
   
      try {
        const userId = req.query.id;
        const user = await UserData.getUserById(userId);
        if (user.length === 0)
          return res.status(400).json({ error: "The Id doesn't exist!" });
        else await UserData.deleteUserById(userId);

        return res.status(200).json({ message: "user deleted successfully" });
      } catch (err) {
        return next(new Error(err));
      }
    }
  

}
export default userController;
