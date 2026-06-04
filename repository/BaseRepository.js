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

    async create(table, columns, values) {
        let num_values = "$1";
        for (let i = 2; i <= values.length; i++) num_values += `, $${i}`;
        await pool.query(
            `INSERT INTO ${table} (${columns}) values (${num_values})`,
            values,
        );
    }

    async update(table, columns, id, newValues) {
        let changes = `${columns[0]} = $2`;
        for (let i = 2; i <= newValues.length; i++) {
            changes += `, ${columns[i - 1]} = $${i + 1}`;
        }
        console.log(`UPDATE ${table} SET ${changes} WHERE id = $1`, newValues);
        await pool.query(`UPDATE ${table} SET ${changes} WHERE id = $1`, [
            id,
            ...newValues,
        ]);

        return this.getById(table, columns, id);
    }

    async delete(table, id) {
        const registerDeleted = await pool.query(
            `DELETE FROM ${table} WHERE id = $1`,
            [id],
        );
    }
}

export default BaseRepository;
