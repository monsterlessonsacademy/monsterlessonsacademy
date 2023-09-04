import { DeleteResult, ObjectId } from "mongodb";
import * as db from "../db";
import { Comment, CommentWithoutID } from "../types/comment";

export const all = (): Promise<Comment[]> => {
  return db.get().collection("comments").find<Comment>({}).toArray();
};

export const create = async (comment: CommentWithoutID): Promise<Comment> => {
  await db
    .get()
    .collection("comments")
    .insertOne({ ...comment, createdAt: new Date() });
  return comment as Comment;
};

export const update = async (
  id: string,
  newData: CommentWithoutID
): Promise<Comment> => {
  await db
    .get()
    .collection("comments")
    .updateOne({ _id: new ObjectId(id) }, { $set: newData });

  return {
    ...newData,
    _id: id,
  };
};

export const deleteById = (id: string): Promise<DeleteResult> => {
  return db
    .get()
    .collection("comments")
    .deleteOne({ _id: new ObjectId(id) });
};
