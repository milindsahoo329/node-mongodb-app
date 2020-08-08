module.exports = {
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
    DB: process.env.DB_NAME || "codesample_db"
};