import express from "express"
import eventController from "../../controllers/eventController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

// router.get('/events',checkAdmin.isAdmin,eventController.getAllEvents);
// router.get('/eventByInput/:input',checkAdmin.isAdmin,eventController.getEventByInput)
// router.get('/events/titles',checkAdmin.isAdmin,eventController.getTitles);
// router.get('/general/events',checkAdmin.isAdmin,eventController.getEventsGeneral);
// router.get('/event/:id',checkAdmin.isAdmin,eventController.getEvent);
// router.post('/event',checkAdmin.isAdmin,eventController.addEvent);
// router.put('/event/:id',checkAdmin.isAdmin, eventController.updatEvent);
// router.delete('/events/:id',checkAdmin.isAdmin,eventController.deleteEvent);
// router.get("/events/date/search",checkAdmin.isAdmin,eventController.getEventByDate)
// router.get("/events/type",checkAdmin.isAdmin,eventController.getEventByType)
// router.get("/event/name",checkAdmin.isAdmin,eventController.getEventByName)
// router.put("/update/event/:id",checkAdmin.isAdmin,eventController.updatEvent)

//without token
router.get('/events',eventController.getAllEvents);
router.get('/eventByInput/:input',eventController.getEventByInput)
router.get('/events/titles',eventController.getTitles);
router.get('/general/events',eventController.getEventsGeneral);
router.get('/event/:id',eventController.getEvent);
router.post('/event',eventController.addEvent);
router.put('/event/:id',eventController.updatEvent);
router.delete('/events/:id',eventController.deleteEvent);
router.get("/events/date/search",eventController.getEventByDate)
router.get("/events/type",eventController.getEventByType)
router.get("/event/name",eventController.getEventByName)
router.put("/update/event/:id",eventController.updatEvent)
export default router;