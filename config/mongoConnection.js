const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    serverUrl:
      "mongodb+srv://thommy:Emebet1994@cluster0.ebf0nyk.mongodb.net/?retryWrites=true&w=majority",
    database: "trial",
  },
  useUnifiedTopology: true,
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl, {
      useNewUrlParser: true,
    });
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
