import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getLga=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LGA');
        const data = await pool.request().query(sqlQueries.LgaList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}

const countingLga=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LGA');
        const data = await pool.request().query(sqlQueries.countLGA);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeLga = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LGA');
        const insertPost = await pool.request()
            .input('LgaName', sql.NVarChar(150), data.LgaName)
            .input('State', sql.uniqueidentifier, data.State)
            .input('Created', sql.DateTime, data.Created)
            .query(sqlQueries.createLga);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateLga = async (data,Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LGA');
        const insertPost = await pool.request()
            .input('Id', sql.Int, Id)
            .input('LgaName', sql.NVarChar(150), data.LgaName)
            .input('State', sql.uniqueidentifier, data.State)
            .query(sqlQueries.updateLga);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('LGA')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteLga)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('LGA')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.getLgaById)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}

export default {getLga,storeLga,updateLga,deleteById,countingLga,getById}