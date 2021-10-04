import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getGateWay=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Gateway');
        const data = await pool.request().query(sqlQueries.List);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeGateway = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Gateway');
        const insertPost = await pool.request()
            .input('Description', sql.NVarChar(150), data.Description)
            .input('GKey1', sql.NVarChar(150), data.GKey1)
            .input('GKey2', sql.NVarChar(150), data.GKey2)
            .input('DateCreated', sql.DateTime, data.DateCreated)
            .input('DateUpdated', sql.DateTime, data.DateUpdated)
            .query(sqlQueries.createGateway);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateGateway = async (data,Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Gateway');
        const insertPost = await pool.request()
            .input('Id', sql.Int, data.Id)
            .input('Description', sql.NVarChar(150), data.Description)
            .input('GKey1', sql.NVarChar(150), data.GKey1)
            .input('GKey2', sql.NVarChar(150), data.GKey2)
            .input('DateUpdated', sql.DateTime, data.DateUpdated)
            .query(sqlQueries.updateGateway);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('Gateway')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteGateway)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('Gateway')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.getGatewayById)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}


export default {getGateWay,storeGateway,updateGateway,deleteById,getById}