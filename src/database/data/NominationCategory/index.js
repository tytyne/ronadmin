
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getNominationCategory=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NominationCategory');
        const data = await pool.request().query(sqlQueries.NominationCategoryList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeNominationCategory = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NominationCategory');
        const insertPost = await pool.request()
            .input('Description', sql.NVarChar(150), data.Description)
            .input('DateCreated', sql.DateTime, data.DateCreated)
            .input('DateUpdated', sql.DateTime, data.DateUpdated)
            .query(sqlQueries.createNominationCategory);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateNominationCategory = async (Id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NominationCategory');
        const insertPost = await pool.request()
            .input('Id', sql.Int, Id)
            .input('Description', sql.NVarChar(150), data.Description)
            .query(sqlQueries.updateNominationCategoryById);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('NominationCategory')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteNominationCategory)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getNomsById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('NominationCategory')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.getNominationCategoryById)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}

export default {getNominationCategory,storeNominationCategory,updateNominationCategory,deleteById,getNomsById}