import express from "express"
import wardController from "../../controllers/wardController"
import StatesController from "../../controllers/statesController"
import federalController from "../../controllers/federalController"
import senatorialController from "../../controllers/senatorialController"
import nominationCategory from "../../controllers/nominationCategoryController"
import statehouseController from "../../controllers/statehouseController"
import LgaController from "../../controllers/lgaController"
import countryController from "../../controllers/countryController"
import broadcastTypeController from "../../controllers/broadcastTypeContoller"
import discussionSpacesOwnerController from "../../controllers/discussionSpacesOwnerController"
import electedPositionController from "../../controllers/electedPositionController"
import discussionController from "../../controllers/DiscussionController"
import eventCategoryContoller from "../../controllers/eventCategoryContoller"
import notificationController from "../../controllers/notificationController"
import hostTypeController from "../../controllers/hostTypeController"
import gatewayController from "../../controllers/gatewayController"
import checkAdmin from "../../middlewares/checkAdmin"

const router=express.Router()

router.get("/wards",checkAdmin.isAdmin,wardController.allWards)
router.get("/states",checkAdmin.isAdmin,StatesController.allStates)
router.get("/federals",checkAdmin.isAdmin,federalController.allFederals)
router.get("/senetorialdistrict",checkAdmin.isAdmin,senatorialController. allSenatorialDistrict)
//trial new
router.get("/nominations",checkAdmin.isAdmin,nominationCategory.allNominationCategories)
router.get("/statehouse",checkAdmin.isAdmin,statehouseController.allStatehouse)
router.get("/lga",checkAdmin.isAdmin,LgaController.allLga)
router.get("/gateway",checkAdmin.isAdmin,gatewayController.allGateway)
router.get("/countries",checkAdmin.isAdmin,countryController.allCountries)
router.get("/broadcastTypes",checkAdmin.isAdmin,broadcastTypeController.allBroadcastType)
router.get("/discussionSpaceOwner",checkAdmin.isAdmin,discussionSpacesOwnerController.allDiscussionSpaceOwner)
router.get("/elected",checkAdmin.isAdmin,electedPositionController.allElectedPosition)
router.get("/discussions",checkAdmin.isAdmin,discussionController.getAll)
router.get("/eventHostType",checkAdmin.isAdmin,hostTypeController.getAll)
router.get("/eventCategories",checkAdmin.isAdmin,eventCategoryContoller.allEventCategory)
router.get("/notifications",checkAdmin.isAdmin,notificationController.allNotifications)

export default router