
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getFederal=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const data = await pool.request().query(sqlQueries.FederalList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeFederal = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const insertPost = await pool.request()
            .input('FcName', sql.NVarChar(250), data.FcName)
            .input('Created', sql.DateTime, data.Created)
            
            .query(sqlQueries.createFederal);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateFederal = async (Id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const insertPost = await pool.request()
            .input('Id', sql.Int, Id)
            .input('FcName', sql.NVarChar(250), data.FcName)
            .query(sqlQueries.updateFederalById);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const deletefederalById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('FederalConstituency')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteFederal)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getFederalById = async (federalId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const user = await pool.request()
            .input('Id', sql.Int,federalId)
            .query(sqlQueries.federalById);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

export default {getFederal,storeFederal,updateFederal,getFederalById,deletefederalById}