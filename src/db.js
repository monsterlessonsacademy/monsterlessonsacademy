const { MongoClient } = require("mongodb");

const state = {
  db: null,
};

exports.connect = async (url, dbname) => {
  try {
    if (state.db) {
      return;
    }

    const client = new MongoClient(url);

    await client.connect();

    state.db = client.db(dbname);
  } catch (err) {
    console.error(err);
  }
};

exports.get = () => {
  return state.db;
};
