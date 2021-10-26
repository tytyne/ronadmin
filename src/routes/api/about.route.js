import express from "express"
import aboutController from "../../controllers/aboutController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()


router.get("/about",checkAdmin.isAdmin,aboutController.allAbout)
router.put("/about/update/:id",checkAdmin.isAdmin,aboutController.editAbout)

export default router;