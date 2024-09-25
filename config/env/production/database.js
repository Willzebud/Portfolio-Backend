// path: ./config/env/production/database.ts

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "clhtb6lu92mj2.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com", // Host de la base de données
      port: 5432, // Port utilisé par PostgreSQL
      database: "dct63fh5nej8jp", // Nom de la base de données
      user: "ueibs0ann1qbuu", // Utilisateur de la base de données
      password:
        "pc917933459e298636b4537d128d5c2d4b5f6e8c994ffaa5758e680ff9d2f3b95", // Mot de passe de l'utilisateur
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
