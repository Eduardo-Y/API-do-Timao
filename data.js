import { randomUUID } from "node:crypto";

const PLAYERS = [
    {
        name: "Cláudio Christovam de Pinho",
        position: "Right Winger",
        started: 1945,
        left: 1957,
        stats: {
            goals: 305,
        },
        titles: [
            "Campeonato Paulista (1951, 1952, 1954)",
            "Torneio Rio-São Paulo (1950, 1953, 1954)",
        ],
    },
    {
        name: "Baltazar (Oswaldo Silva)",
        position: "Forward",
        started: 1945,
        left: 1957,
        stats: {
            goals: 269,
        },
        titles: [
            "Campeonato Paulista (1951, 1952, 1954)",
            "Torneio Rio-São Paulo (1950, 1953, 1954)",
        ],
    },
    {
        name: "Luizinho (Pequeno Polegar)",
        position: "Midfielder",
        started: 1948,
        left: 1962,
        stats: {
            goals: 175,
        },
        titles: [
            "Campeonato Paulista (1951, 1952, 1954)",
            "Torneio Rio-São Paulo (1950, 1953, 1954)",
        ],
    },
    {
        name: "Sócrates",
        position: "Midfielder",
        started: 1978,
        left: 1984,
        stats: {
            goals: 172,
        },
        titles: ["Campeonato Paulista (1979, 1982, 1983)"],
    },
    {
        name: "Marcelinho Carioca",
        position: "Midfielder",
        started: 1994,
        left: 2001,
        stats: {
            goals: 206,
        },
        titles: [
            "FIFA Club World Cup (2000)",
            "Campeonato Brasileiro (1998, 1999)",
            "Copa do Brasil (1995)",
            "Campeonato Paulista (1995, 1997, 1999, 2001)",
        ],
    },
    {
        name: "Cássio Ramos",
        position: "Goalkeeper",
        started: 2012,
        left: 2024,
        stats: {
            penalty_defenses: 32,
        },
        titles: [
            "FIFA Club World Cup (2012)",
            "Copa Libertadores (2012)",
            "Campeonato Brasileiro (2015, 2017)",
            "Recopa Sudamericana (2013)",
            "Campeonato Paulista (2013, 2017, 2018, 2019)",
        ],
    },
    {
        name: "Rivelino",
        position: "Midfielder",
        started: 1965,
        left: 1974,
        stats: {
            goals: 144,
        },
        titles: ["Torneio Rio-São Paulo (1966)"],
    },
    {
        name: "Wladimir",
        position: "Left Back",
        started: 1972,
        left: 1985,
        stats: {
            goals: 32,
        },
        titles: ["Campeonato Paulista (1977, 1979, 1982, 1983)"],
    },
    {
        name: "Neto",
        position: "Midfielder",
        started: 1989,
        left: 1993,
        stats: {
            goals: 80,
        },
        titles: ["Campeonato Brasileiro (1990)", "Supercopa do Brasil (1991)"],
    },
    {
        name: "Teleco",
        position: "Forward",
        started: 1934,
        left: 1944,
        stats: {
            goals: 257,
        },
        titles: ["Campeonato Paulista (1937, 1938, 1939, 1941)"],
    },
    {
        name: "Ronaldo Giovanelli",
        position: "Goalkeeper",
        started: 1988,
        left: 1998,
        stats: {
            penalty_defenses: 24,
        },
        titles: [
            "Campeonato Brasileiro (1990)",
            "Copa do Brasil (1995)",
            "Campeonato Paulista (1988, 1995, 1997)",
        ],
    },
    {
        name: "Zé Maria",
        position: "Right Back",
        started: 1970,
        left: 1983,
        stats: {
            goals: 17,
        },
        titles: ["Campeonato Paulista (1977, 1979, 1982, 1983)"],
    },
    {
        name: "Basílio",
        position: "Midfielder",
        started: 1975,
        left: 1981,
        stats: {
            goals: 29,
        },
        titles: ["Campeonato Paulista (1977, 1979)"],
    },
    {
        name: "Freddy Rincón",
        position: "Defensive Midfielder",
        started: 1997,
        left: 2000,
        stats: {
            goals: 11,
        },
        titles: [
            "FIFA Club World Cup (2000)",
            "Campeonato Brasileiro (1998, 1999)",
            "Campeonato Paulista (1999)",
        ],
    },
    {
        name: "Danilo Gabriel de Andrade",
        position: "Midfielder",
        started: 2010,
        left: 2018,
        stats: {
            goals: 35,
        },
        titles: [
            "FIFA Club World Cup (2012)",
            "Copa Libertadores (2012)",
            "Campeonato Brasileiro (2011, 2015, 2017)",
            "Recopa Sudamericana (2013)",
            "Campeonato Paulista (2013, 2017, 2018)",
        ],
    },
    {
        name: "Emerson Sheik",
        position: "Forward",
        started: 2011,
        left: 2014,
        stats: {
            goals: 28,
        },
        titles: [
            "FIFA Club World Cup (2012)",
            "Copa Libertadores (2012)",
            "Campeonato Brasileiro (2011)",
            "Recopa Sudamericana (2013)",
            "Campeonato Paulista (2013, 2018)",
        ],
    },
    {
        name: "Gylmar dos Santos Neves",
        position: "Goalkeeper",
        started: 1951,
        left: 1961,
        stats: {
            penalty_defenses: 15,
        },
        titles: [
            "Campeonato Paulista (1951, 1952, 1954)",
            "Torneio Rio-São Paulo (1953, 1954)",
        ],
    },
    {
        name: "Vampeta",
        position: "Midfielder",
        started: 1998,
        left: 2000,
        stats: {
            goals: 17,
        },
        titles: [
            "FIFA Club World Cup (2000)",
            "Campeonato Brasileiro (1998, 1999)",
            "Campeonato Paulista (1999, 2003)",
        ],
    },
    {
        name: "Paulinho",
        position: "Midfielder",
        started: 2010,
        left: 2013,
        stats: {
            goals: 40,
        },
        titles: [
            "FIFA Club World Cup (2012)",
            "Copa Libertadores (2012)",
            "Campeonato Brasileiro (2011)",
            "Campeonato Paulista (2013)",
        ],
    },
    {
        name: "Neco",
        position: "Forward",
        started: 1913,
        left: 1930,
        stats: {
            goals: 242,
        },
        titles: [
            "Campeonato Paulista (1914, 1916, 1922, 1923, 1924, 1928, 1929, 1930)",
        ],
    },
];

PLAYERS.forEach((player) => (player.id = randomUUID()));

export default PLAYERS;
