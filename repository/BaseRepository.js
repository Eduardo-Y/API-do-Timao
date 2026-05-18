import pool from "./db.js";

class BaseRepository {
    async getAll(table, columns) {
        let results = (await pool.query(`SELECT ${columns} FROM ${table}`))
            .rows;
        return results;
    }
}

export default BaseRepository;
