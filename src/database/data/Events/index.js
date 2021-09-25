'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const eventsList = await pool.request().query(sqlQueries.allEvents);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const countingEvents=async()=>{

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const eventsList = await pool.request().query(sqlQueries.countEvents);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getGeneralEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const eventsList = await pool.request().query(sqlQueries.generalEvents);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getEventTitles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const eventsList = await pool.request().query(sqlQueries.eventTitle);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getById = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const event = await pool.request()
            .input('Id', sql.UniqueIdentifier, eventId)
            .query(sqlQueries.eventById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getByInput = async (eventInput) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const event = await pool.request()
            .input('Input', NVarChar(250), eventInput)
            .query(sqlQueries.eventByInput);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getByEventTitle = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const event = await pool.request()
            .input('EventTitle', sql.NVarChar(250), eventdata)
            .query(sqlQueries.eventByName);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const creatEvent = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const insertEvent = await pool.request()
             .input('Id', sql.UniqueIdentifier,eventdata.Id)
            .input('EventTitle', sql.NVarChar(250), eventdata.EventTitle)
            .input('EventStartTime', sql.DateTime2(7), eventdata.EventStartTime)
            .input('EventEndTime', sql.DateTime2(7), eventdata.EventEndTime)
            .input('EventDuration', sql.Int, eventdata.EventDuration)
            .input('EventDescription', sql.NVarChar(250), eventdata.EventDescription)
            .input('EventStreamEnbedCode', sql.NVarChar(250), eventdata.EventStreamEnbedCode)
            .input('EventStreamEmbedType', sql.Int, eventdata.EventStreamEmbedType)
            .input('HostDiscussionSpaceId', sql.Int, eventdata.HostDiscussionSpaceId)
            .input('CreatedAt', sql.DateTime2(7), eventdata.CreatedAt)
            .input('CreatedBy', sql.Int, eventdata.CreatedBy)
            .input('UpdatedAt', sql.DateTime2(7), eventdata.UpdatedAt)
            .input('UpdatedBy', sql.Int, eventdata.UpdatedBy)
            .input('HostType', sql.BigInt, eventdata.HostType)
            .input('EventStatus', sql.Int, eventdata.EventStatus)
            .query(sqlQueries.createEvent);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const update = await pool.request()
            .input('Id', sql.UniqueIdentifier,Id)
            .input('EventTitle', sql.NVarChar(250), data.EventTitle)
            .input('EventStartTime', sql.DateTime2(7), data.EventStartTime)
            .input('EventEndTime', sql.DateTime2(7), data.EventEndTime)
            .input('EventDuration', sql.Int, data.EventDuration)
            .input('EventDescription', sql.NVarChar(250), data.EventDescription)
            .input('EventStreamEnbedCode', sql.NVarChar(250), data.EventStreamEnbedCode)
            .input('EventStreamEmbedType', sql.Int, data.EventStreamEmbedType)
            .input('HostDiscussionSpaceId', sql.Int, data.HostDiscussionSpaceId)
            .input('UpdatedAt', sql.DateTime2(7), data.UpdatedAt)
            .input('UpdatedBy', sql.Int, data.UpdatedBy)
            .input('HostType', sql.BigInt, data.HostType)
            .input('EventStatus', sql.Int, data.EventStatus)
            .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const deleteEvent = await pool.request()
            .input('Id', sql.UniqueIdentifier,Id)
            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const hostEvent = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const Event = await pool.request()
            .input('HostType', sql.BigInt,data)
            .query(sqlQueries.eventType);
        return Event.recordset;
    } catch (error) {
        return error.message;
    }
}

const dateEvent = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Events');
        const Event = await pool.request()
            .input('input', sql.DateTime2,data)
            .query(sqlQueries.eventDate);
        return Event.recordset;
    } catch (error) {
        return error.message;
    }
}

export default {
    getEvents,
    getById,
    getByInput,
    creatEvent,
    updateEvent,
    deleteEvent,
    getByEventTitle,
    hostEvent,
    dateEvent,
    getGeneralEvents,
    getEventTitles,
    dateEvent,
    getGeneralEvents,
    getEventTitles,
    countingEvents

}