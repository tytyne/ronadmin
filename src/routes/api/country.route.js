import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import countryController from "../../controllers/countryController";
const router = express.Router()
router.get("/country/all",checkAdmin.isAdmin,countryController.allCountries)
export default router;