import BaseRepository from "./BaseRepository.js";
import pool from "./db.js";

class PlayersRepository extends BaseRepository {
    async getAll() {
        const results = await new BaseRepository().getAll("players", "*");
        return results;
    }

    async getByName(name) {
        const results = (
            await pool.query(`SELECT * FROM players WHERE "Name" LIKE $1`, [
                `%${name}%`,
            ])
        ).rows;
        return results;
    }
}

export default PlayersRepository;
