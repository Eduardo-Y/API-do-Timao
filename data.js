import { randomUUID } from "node:crypto";

const PLAYERS = [
    {
        id: "b88ea59b-3265-4d18-bf58-966b9a0f4fd1",
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
        id: "7a1a803c-d369-4544-9dcb-fb464e80e1dd",
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
        id: "f2d02f28-1364-40ee-b3de-e3eaf110451a",
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
        id: "b0f513f2-10e7-4ba7-82f1-11bcd48bf7dc",
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
        id: "3848d117-7043-49c8-ab3b-656391923056",
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
        id: "90ff99ac-a40b-4828-b713-b21d8b9fe677",
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
        id: "374c5a14-8abd-4c40-ba3b-bc5e6ad7653e",
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
        id: "a60acd81-9a6c-4058-bc2d-bab1167cdcde",
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
        id: "da057aa6-402d-458f-b916-ed1db3f46ebe",
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
        id: "5514c18a-4caa-440c-a9ef-a68c21fe3c86",
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
        id: "7ec0575e-59cf-4809-a0f1-e952cd39d033",
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
        id: "013a43e4-98d5-4b4e-a03c-ed7d8c0279ae",
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
        id: "41cf7854-8a2f-4cce-9a73-60909520ac8c",
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
        id: "c1e3fe2c-e2f2-41c4-b267-8cda373b3f23",
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
        id: "340258cf-061b-4bc8-bf61-3075705b616d",
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
        id: "31490da3-8005-4f2d-8024-42806eb433fc",
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
        id: "534a498e-517a-45fd-acca-13eb576af409",
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
        id: "c3e3ebc2-83c4-4686-809f-543f9a642248",
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
        id: "36c3dc2e-9da4-4872-a34d-87a9eb264934",
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
        id: "1c3f5bef-72f0-4bb3-ad91-27522f607a83",
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
