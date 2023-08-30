import { Db, MongoClient } from "mongodb";

const state: { db: Db | null } = { db: null };

export const connect = async (url: string, dbname: string): Promise<void> => {
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

export const get = (): Db => {
  if (!state.db) {
    throw new Error("Connection is not initialized");
  }

  return state.db;
};
