module.exports = {
    apps: [
        {
            name: "Mutuality",
            script: "app.js",
            watch: ".",
            env: {
                NODE_ENV: "development",
                PORT: 3306,
                HOST: "147.182.130.83",
                USER: "armando",
                PASS: "YR8&xE%W",
                DB: "mutuality_app_db",
                SQL_DB: 3306,
            },
        },
    ],
};
