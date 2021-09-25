import express from "express"
import hostTypeController from "../../controllers/hostTypeController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()


router.get("/hosts",checkAdmin.isAdmin,hostTypeController.getAll)
router.get("/hosyByInput",checkAdmin.isAdmin,hostTypeController.getHostByName)


export default router;