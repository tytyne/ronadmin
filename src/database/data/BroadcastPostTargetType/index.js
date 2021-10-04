'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getPostTargetTypes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
        const posts = await pool.request().query(sqlQueries.list);
        return posts.recordset

    } catch (error) {
        console.log(error.message);
    }
}

const storeBroadcastPostType = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
        const insertPost = await pool.request()
            .input('Description', sql.NVarChar(150), data.Description)
            .input('Created', sql.DateTime, data.Created)
            .query(sqlQueries.createBroadcastType);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateBroadcastType = async (data,Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
        const insertPost = await pool.request()
        .input('Id', sql.Int, Id)
        .input('Description', sql.NVarChar(150), data.Description)
        .input('Created', sql.DateTime, data.Created)
        .query(sqlQueries.updateBroadcastType);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteBroadcastType)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.getLgaById)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}


export default {getPostTargetTypes,storeBroadcastPostType}


