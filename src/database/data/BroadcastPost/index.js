import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const createBroadcast = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPost');
        const insertPost = await pool.request()
            .input('Comment', sql.NVarChar(250), data.Comment)
            .input('TargetType', sql.Int, data.TargetType)
            .input('TargetID', sql.Int, data.TargetID)
            .input('CreatedBy', sql.Int, data.CreatedBy)
            .input('CreatedAt', sql.DateTime, data.CreatedAt)
            .input('UpdatedBy', sql.Int, data.UpdatedBy)
            .input('UpdatedAt', sql.DateTime, data.UpdatedAt)
            .input('MediaType', sql.NVarChar(50), data.MediaType)
            .input('MediaURL', sql.NVarChar(1500), data.MediaURL)
            .input('Status', sql.Bit, data.Status)
            .query(sqlQueries.createBroadcastPost);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const getBroadcats = async () => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPost')
    const posts = await pool.request()
        .query(sqlQueries.list)
    return posts.recordset
}
const countingBroadcasts = async () => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPost')
    const posts = await pool.request()
        .query(sqlQueries.countBroadcastPost)
    return posts.recordset
}
const getById = async (Id) => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPost')
    const posts = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.broadcastById)
    return posts.recordset
}

const getByInput = async (data) => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPost')
    const posts = await pool.request()
        .input('Input',sql.NVarChar(100), data)
        .query(sqlQueries.broadcastById)
    return posts.recordset
}

const deleteById = async (Id) => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('BroadcastPost')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteBroadcast)
    return post.recordset
}

const updatingBroad = async (Id,data) => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPost');
        const updatePost = await pool.request()

            .input('Id',sql.Int,Id)
            .input('Comment', sql.NVarChar(250), data.Comment)
            .input('TargetType', sql.Int, data.TargetType)
            .input('TargetID', sql.Int, data.TargetID)
            .input('CreatedBy', sql.Int, data.CreatedBy)
            .input('CreatedAt', sql.DateTime, data.CreatedAt)
            .input('UpdatedBy', sql.Int, data.UpdatedBy)
            .input('UpdatedAt', sql.DateTime, data.UpdatedAt)
            .input('MediaType', sql.NVarChar(50), data.MediaType)
            .input('MediaURL', sql.NVarChar(1500), data.MediaURL)
            .input('Status', sql.Bit, data.Status)
          .query(sqlQueries.updateBroadcast);
        return updatePost.recordset;
    } catch (error) {
        return error.message;
    }

 }

export default {

    createBroadcast, getBroadcats, getById,getByInput, updatingBroad,deleteById,countingBroadcasts


}