import { DeleteResult, ObjectId } from "mongodb";
import * as db from "../db";
import { Artist, ArtistWithoutId } from "../types/artist";

export const all = (): Promise<Artist[]> => {
  return db.get().collection("artists").find<Artist>({}).toArray();
};

export const findById = (id: string): Promise<Artist | null> => {
  return db
    .get()
    .collection("artists")
    .findOne<Artist>({ _id: new ObjectId(id) });
};

export const create = async (artist: ArtistWithoutId): Promise<Artist> => {
  await db.get().collection("artists").insertOne(artist);
  return artist as Artist;
};

export const update = async (
  id: string,
  newData: ArtistWithoutId
): Promise<Artist> => {
  await db
    .get()
    .collection("artists")
    .updateOne({ _id: new ObjectId(id) }, { $set: newData });

  return {
    ...newData,
    _id: id,
  };
};

export const deleteById = (id: string): Promise<DeleteResult> => {
  return db
    .get()
    .collection("artists")
    .deleteOne({ _id: new ObjectId(id) });
};
