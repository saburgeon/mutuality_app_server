
module.exports = {
    apps: [
        {
            name: "Mutuality",
            script: "app.js",
            watch: ".",
            env: {
                NODE_ENV: "development",
                PORT:8082,
                USER: "armandolocal",
                PASS: "YR8&xE%W",
                DB: "mutuality_app_db",
                SQL_DB: 3306,
            },
        },
    ],
};
