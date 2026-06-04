import BaseRepository from "./BaseRepository.js";
import pool from "./db.js";

class PlayersRepository extends BaseRepository {
    async getAll() {
        const results = await new BaseRepository().getAll("players", "*");
        return results;
    }

    async getById(id) {
        const result = await new BaseRepository().getById("players", "*", id);
        return result;
    }

    async getByName(name) {
        const results = (
            await pool.query(
                `SELECT * FROM players WHERE LOWER(name) LIKE $1`,
                [`%${name}%`],
            )
        ).rows;
        return results;
    }

    async create(name, position) {
        await new BaseRepository().create(
            "players",
            "name, position",
            name,
            position,
        );
    }
}

export default PlayersRepository;
