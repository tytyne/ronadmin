import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import DonationController from "../../controllers/donationController"
const router = express.Router()

router.get("/donations",DonationController.getAllDonations)
router.get("/donations/total",DonationController.donationTotal)
router.get("/donations/pending",DonationController.donationPending)
export default router;