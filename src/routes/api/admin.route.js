import express from "express"
import adminController from "../../controllers/adminController"
import adminValidator from "../../validators/adminValidator"
import auth from "../../middlewares/checkAdmin"
const router = express.Router()


router.post("/login",adminController.login)
router.post("/register",auth.isAdmin,adminValidator.create,adminController.register)
router.post("/admin/forgot_password",adminController.forgetPassword)
router.post("/admin/reset_password/:token",adminValidator.reset,adminController.resetPassword)
router.delete("/admins/:id",auth.isAdmin,adminController.deleteAdmin)
router.get("/admin/id",auth.isAdmin,adminController.getAdminById)
router.get("/admins",auth.isAdmin,adminController.getAdmins)
router.get("/admin/email",auth.isAdmin,adminController.getAdminByEmail)
router.get("/admin/input",auth.isAdmin, adminController.getAdminByInput)
router.get("/me",auth.isAdmin,adminController.getAdminValue)
router.put("/disable/admin/:id",adminController.disablingAdmin)
router.get("/admin/me",auth.isAdmin,adminController.getAdminInfo)
export default router;