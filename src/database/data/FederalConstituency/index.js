
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
            
            .query(sqlQueries.createState);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateFederal = async (data,id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const insertPost = await pool.request()
            .input('id', sql.Int, id)
            .input('FcName', sql.NVarChar(250), data.FcName)
            .input('Created', sql.DateTime, data.Created)
            
            .query(sqlQueries.createState);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const deletefederalById = async (id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('FederalConstituency')
    const post = await pool.request()
        .input('id', sql.Int, id)
        .query(sqlQueries.deleteFederal)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getFederalById = async (id)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('FederalConstituency');
        const user = await pool.request()
            .input('id', sql.Int,id)
            .query(sqlQueries.federalById);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

export default {getFederal,storeFederal,updateFederal,getFederalById,deletefederalById}