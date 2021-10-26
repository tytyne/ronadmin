'use strict';
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import EventData from "../database/data/Events"
import customMessage from "../utils/customMessage";
import UserData from "../database/data/User";
import DiscussionSpaceUserData from "../database/data/DiscussionSpace_User";
import statusCode from "../utils/statusCode";
import responses from "../utils/responses";
import errorMessage from "../utils/errorMessage";
import { makeStatus} from "../utils/makeResponse"
import Mailer from "../utils/mail/email";
import {
  makeEmailArray,
  makeIdArray,
  makeFirstnameArray,
  makeLastnameArray,
  makeUserIdArray,
} from "../utils/makeResponse";



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
        let emailArray, firstnameArray, lastnameArray, idArray;


        const currentDate = new Date()
        var newDateObj = moment(EventStartTime).add(EventDuration, 'm').toDate();
        if (new Date(EventStartTime) < currentDate) {
            return res.status(400).json({ message: "The Start time is before today " })
        }
        //get users
        const users = await UserData.getUsers();
      
        //check hosttype

        if (HostType === "2" || HostType === "4") {

            HostDiscussionSpaceId = "0"
        }
        else
            HostDiscussionSpaceId

        const statusRes = await makeStatus(EventStatus)

        const event = await EventData.creatEvent({
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
            CreatedBy: req.user.Id,
            CreatedBy:req.user.Id

        });
        const discUser = await DiscussionSpaceUserData.getDiscussionUserById(HostDiscussionSpaceId);
          console.log(discUser);
    
          if (HostType === "1" ||HostType === "3") {
            //send emails to the user in that particular discussionSpace
            emailArray = makeEmailArray(discUser);
            idArray = makeUserIdArray(discUser);
            firstnameArray = makeFirstnameArray(discUser);
            lastnameArray = makeLastnameArray(discUser);
          }
          else 
          console.log(users);
          emailArray = makeEmailArray(users);
          idArray = makeIdArray(users);
          firstnameArray = makeFirstnameArray(users);
          lastnameArray = makeLastnameArray(users);
          // console.log(emailArray);
          // console.log(idArray);
          // console.log(firstnameArray);
          // console.log(lastnameArray);
          // console.log(emailArray.map((a) => a.Email));
          // console.log(idArray.map((a) => a.Id));
          // console.log(firstnameArray.map((a) => a.FirstName));
          // console.log(lastnameArray.map((a) => a.LastName));
          //sample data to send emails
          let id_array = ["1", "2", "3"];
          let email_array = [
            "dusaflora@yahoo.fr",
            "dusaflora2@gmail.com",
            "fimbofinance@gmail.com",
          ];
          let name_array = ["florentine", "tytyne", "dusabe"];
    
          for (let i = 0; i < email_array.length; i++) {
            const mail = new Mailer({
              to: email_array[i],
              name: name_array[i],
              eventdate: `${EventStartTime}`,
              eventitle: `${EventTitle}`,
              eventdescription: `${EventDescription}`,
              optionLinkAccept: `${process.env.APP_URL}/rsvp?u=${id_array[i]}&rsvp=1`,
              optionLinkDecline: `${process.env.APP_URL}/rsvp?u=${id_array[i]}&rsvp=0`,
            });
            await mail.sendMail();
          }
    
          return res
            .status(200)
            .json({ message: "event created successfully!", event });

    } catch (err) {
        return next(new Error(err))
    }
}

const updatEvent = async (req, res, next) => {
    try {
        let { EventTitle, EventStartTime, EventDuration, EventDescription, EventStreamEnbedCode, HostType, HostDiscussionSpaceId, EventStatus,event } = req.body;
        let eventId = req.params.id;
         event = await EventData.getById(eventId);

        if (event.length === 0)
            return res.status(400).json({ error: "This  event can\'t be found!" })

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
            EventTitle,
            EventStartTime,
            EventDuration,
            EventDescription,
            EventStreamEnbedCode,
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