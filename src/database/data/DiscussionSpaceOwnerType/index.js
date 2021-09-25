'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getSpaceOwnerTypes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DiscussionSpaceOwnerType');
        const discussions = await pool.request().query(sqlQueries.getSpaceOwnerType);
        return discussions.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
export default{getSpaceOwnerTypes}