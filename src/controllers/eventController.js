'use strict';
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import EventData from "../database/data/Events"
import customMessage from "../utils/customMessage";
import statusCode from "../utils/statusCode";
import responses from "../utils/responses";
import errorMessage from "../utils/errorMessage";
import { makeStatus} from "../utils/makeResponse"



const { ok, badRequest, notFound } = statusCode;
const { successResponse, errorResponse } = responses;
const { eventCreated, eventList } = customMessage
const { eventFailed, noEvent } = errorMessage


const getAllEvents = async (req, res, next) => {
    try {

        const eventlist = await EventData.getEvents();
        console.log(eventlist)
        if (eventlist.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            // return successResponse(res, ok, undefined, eventList, eventlist)
            return res.status(200).json({eventlist})

    } catch (err) {
        return next(new Error(err))
    }
}
const getEventsGeneral = async (req, res, next) => {
    try {

        const eventlist = await EventData.getGeneralEvents();
        console.log(eventlist)
        if (eventlist.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            // return successResponse(res, ok, undefined, eventList, eventlist)
            return res.status(200).json(eventlist)

    } catch (err) {
        return next(new Error(err))
    }
}
const getTitles = async (req, res, next) => {
    try {

        const eventlist = await EventData.getEventTitles();
        console.log(eventlist)
        if (eventlist.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            return successResponse(res, ok, undefined, eventList, eventlist)

    } catch (err) {
        return next(new Error(err))
    }
}

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await EventData.getById(eventId);
        if (event.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            return successResponse(res, ok, undefined, eventList, event)
    } catch (err) {
        return next(new Error(err))
    }
}
const getEventByType = async (req, res, next) => {
    try {
        const input = req.query.type;
        const event = await EventData.hostEvent(input);
        if (event.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            return successResponse(res, ok, undefined, eventList, event)
    } catch (err) {
        return next(new Error(err))
    }
}
const getEventByDate = async (req, res, next) => {
    try {
        const input = req.query.input;
        const event = await EventData.dateEvent(input);
        if (event.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            return successResponse(res, ok, undefined, eventList, event)
    } catch (err) {
        return next(new Error(err))
    }
}
const getEventByName = async (req, res, next) => {
    try {
        const input = req.query.eventTitle;
        const event = await EventData.getByEventTitle(input);
        console.log(event)
        if (event.length === 0)
            return errorResponse(res, notFound, noEvent)
        else
            return successResponse(res, ok, undefined, eventList, event)
    } catch (err) {
        return next(new Error(err))
    }
}

const getEventByInput = async (req, res, next) => {
    try {
        const input = req.query.input;
        const event = await EventData.getByInput(input);
            return successResponse(res, ok, undefined, eventList, event)
    } catch (err) {
        return next(new Error(err))
    }
}

const addEvent = async (req, res, next) => {
    try {
        let { EventTitle, EventStartTime, EventDuration, EventDescription, EventStreamEnbedCode, HostType, HostDiscussionSpaceId, EventStatus } = req.body;


        const currentDate = new Date()
        var newDateObj = moment(EventStartTime).add(EventDuration, 'm').toDate();
        if (new Date(EventStartTime) < currentDate) {
            return res.status(400).json({ message: "The Start time is before today " })
        }

        if (HostType === "2" || HostType === "4") {

            HostDiscussionSpaceId = 0
        }
        else
            HostDiscussionSpaceId

        const statusRes = await makeStatus(EventStatus)

        const data = await EventData.creatEvent({
            Id: uuidv4(),
            EventTitle, 
            EventStartTime, 
            EventDuration, 
            EventDescription, 
            EventStreamEnbedCode, 
            EventStreamEmbedType: 1,
            EventStatus: statusRes,
            HostDiscussionSpaceId,
            CreatedAt: new Date(),
            HostType,
            EventEndTime: newDateObj,
            EventStreamEmbedType: 1,

            // CreatedBy: req.user.Id
            CreatedBy:6

        });
        return res.status(200).json({ message: "Event created successfully!", data })

    } catch (err) {
        return next(new Error(err))
    }
}

const updatEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await EventData.getById(eventId);

        if (event.length === 0)
            return res.status(400).json({ error: "This  event can\'t be found!" })
        const { EventTitle, EventStartTime, EventDuration, EventDescription, EventStreamEnbedCode, HostType, HostDiscussionSpaceId,EventStatus } = req.body;

        const currentDate = new Date()
        var newDateObj = moment(EventStartTime).add(EventDuration, 'm').toDate();
        if (new Date(EventStartTime) < currentDate) {
            return res.status(400).json({ message: "The Start time is before today " })
        }

        if (HostType === "2" || HostType === "4") {

            HostDiscussionSpaceId = 0
        }
        else
            HostDiscussionSpaceId

        const statusRes = await makeStatus(EventStatus)


        const updated = await EventData.updateEvent(eventId, {
            EventTitle, EventDescription, EventStreamEnbedCode,
            EventStatus: statusRes,
            HostDiscussionSpaceId,
            CreatedAt: new Date(),
            HostType,
            EventEndTime: newDateObj,
            EventStreamEmbedType: 1,
            UpdatedAt: new Date(),
            UpdatedBy: req.user.Id,
        });
        res.send(updated);
    } catch (err) {
        return next(new Error(err))
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await EventData.getById(eventId)
        if (event.length === 0) return res.status(400).json({ error: "no event with that Id" })
        await EventData.deleteEvent(eventId);
        return res.status(200).json({ message: "the event deleted successfully!" });


    } catch (err) {
        return next(new Error(err))
    }
}

export default {
    getAllEvents,
    getEvent,
    addEvent,
    updatEvent,
    deleteEvent,
    getEventByDate,
    getEventByType,
    getEventByName,
    getEventsGeneral,
    getTitles,
    getEventByInput


}