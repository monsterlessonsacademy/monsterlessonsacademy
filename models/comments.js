const { ObjectId } = require("mongodb");
const db = require("../db");

exports.all = () => {
  return db.get().collection("comments").find().toArray();
};

exports.create = async (comment) => {
  const result = await db
    .get()
    .collection("comments")
    .insertOne({ ...comment, createdAt: new Date() });
  return {
    id: result.insertedId,
    body: comment.body,
    parentId: comment.parentId,
    userId: comment.userId,
    createdAt: createdAt,
  };
};

exports.update = async (id, newData) => {
  await db
    .get()
    .collection("comments")
    .updateOne({ _id: ObjectId(id) }, { $set: newData });
  return {
    ...newData,
    _id: id,
  };
};

exports.delete = (id) => {
  return db
    .get()
    .collection("comments")
    .deleteOne({ _id: ObjectId(id) });
};
