import express from "express"
import userController from "../../controllers/userController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

router.get("/userById",checkAdmin.isAdmin,userController.getUserById)
router.get("/userByEmail",checkAdmin.isAdmin,userController.getUserByEmail)
router.get("/userByStatus",checkAdmin.isAdmin,userController.getUserByStatus)
router.get("/userByFirstname",checkAdmin.isAdmin,userController.getUserByFirstname)
router.get("/userByLastname",checkAdmin.isAdmin,userController.getUserByLastname)
router.get("/userByGender",checkAdmin.isAdmin,userController.getUserByGender)
router.get("/userByLga",checkAdmin.isAdmin,userController.getUserByLga)
router.get("/userByStatus",checkAdmin.isAdmin,userController.getUserByStatus)

router.get("/userByInput",checkAdmin.isAdmin,userController.getUserByInput)
router.get("/users",checkAdmin.isAdmin,userController.getUsers)
router.delete("/user/:id",checkAdmin.isAdmin,userController.deleteUser)
router.put("/update/user/:id",checkAdmin.isAdmin,userController.updatingUser)
router.put("/disable/user/:id",checkAdmin.isAdmin,userController.disablingUser)


export default router