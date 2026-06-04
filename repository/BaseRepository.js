import pool from "./db.js";

class BaseRepository {
    async getAll(table, columns) {
        let results = (await pool.query(`SELECT ${columns} FROM ${table}`))
            .rows;
        return results;
    }

    async getById(table, columns, id) {
        const result = (
            await pool.query(
                `SELECT ${columns} FROM ${table} WHERE "id" = $1`,
                [id],
            )
        ).rows;
        return result;
    }

    async create(table, columns, name, position) {
        await pool.query(`INSERT INTO ${table} (${columns}) values ($1, $2)`, [
            name,
            position,
        ]);
    }
}

export default BaseRepository;
