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

  return db.get().collection("comments").findOne({ _id: result.insertedId });
};

exports.update = async (id, newData) => {
  console.log("update", id, newData);
  await db
    .get()
    .collection("comments")
    .updateOne({ _id: ObjectId(id) }, { $set: newData });

  return db
    .get()
    .collection("comments")
    .findOne({ _id: ObjectId(id) });
};

exports.delete = (id) => {
  return db
    .get()
    .collection("comments")
    .deleteOne({ _id: ObjectId(id) });
};
