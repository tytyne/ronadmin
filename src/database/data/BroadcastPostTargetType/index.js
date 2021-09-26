'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getBroadcastPost = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
        const posts = await pool.request().query(sqlQueries.list);

    } catch (error) {
        console.log(error.message);
    }
}

const getPostTargetTypes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BroadcastPostTargetType');
        const posts = await pool.request().query(sqlQueries.getPostTargetType);

        return posts.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

export default {getBroadcastPost,getPostTargetTypes}


