import express from "express"
import hostTypeController from "../../controllers/hostTypeController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()


router.get("/hosts",hostTypeController.getAll)
router.get("/hosyByInput",hostTypeController.getHostByName)


export default router;