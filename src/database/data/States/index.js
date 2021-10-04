
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getStates=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('States');
        const data = await pool.request().query(sqlQueries.StatesList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeState = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('States');
        const insertPost = await pool.request()
            .input('StateID', sql.UniqueIdentifier,data.StateID)
            .input('Statename', sql.NVarChar(50), data.Statename)
            .input('Created', sql.DateTime, data.Created)
            
            .query(sqlQueries.createState);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateState = async (Id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('States');
        const insertPost = await pool.request()
            .input('Id', sql.UniqueIdentifier, Id)
            .input('Statename', sql.NVarChar(250), data.Statename)
            .input('Created', sql.DateTime, data.Created)
            
            .query(sqlQueries.updateState);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}


const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('States')
    const post = await pool.request()
        .input('Id', sql.UniqueIdentifier, Id)
        .query(sqlQueries.deleteState)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getStateById = async (stateId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('States');
        const user = await pool.request()
            .input('Id',sql.UniqueIdentifier,stateId)
            .query(sqlQueries.stateById);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

export default {getStates,storeState,updateState,deleteById,getStateById}