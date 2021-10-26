import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"




const getAbout = async () => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('About')
    const posts = await pool.request()
        .query(sqlQueries.list)
    return posts.recordset
}


const updatingAbout = async (id,data) => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('About');
        const updatePost = await pool.request()
            .input('id',sql.Int,id)
            .input('Overview', sql.NVarChar(5000), data.Overview)
            .input('CoreValue', sql.NVarChar(5000), data.CoreValue)
            .input('Objectives', sql.NVarChar(5000), data.Objectives)
            .query(sqlQueries.edit);
        return updatePost.recordset;
    } catch (error) {
        return error.message;
    }

 }

 const getById = async (id) => {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('About')
    const posts = await pool.request()
        .input('id', sql.Int, id)
        .query(sqlQueries.aboutById)
    return posts.recordset
}

 export default{getAbout,updatingAbout,getById}