import express from "express"
import speakerController from "../../controllers/speakerController"
import checkAdmin from "../../middlewares/checkAdmin"
const router=express.Router()

// router.post("/speaker",checkAdmin.isAdmin,speakerController.createSpeaker)
router.post("/speaker",checkAdmin.isAdmin,speakerController.createSpeaker)
router.get("/speakerByInput",checkAdmin.isAdmin,speakerController.getSpeakerByInput)
router.get("/speaker/:id",checkAdmin.isAdmin,speakerController.getSpeakerById)
router.get("/speakers",checkAdmin.isAdmin,speakerController.gettingSpeakers)
router.put("/speaker/:id",checkAdmin.isAdmin,speakerController.updateSpeaker)
router.delete("/speaker/:id",checkAdmin.isAdmin,speakerController.deleteSpeaker)

export default router