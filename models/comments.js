const { ObjectId } = require("mongodb");
const db = require("../db");

exports.all = () => {
  return db.get().collection("comments").find().toArray();
};

exports.create = async (comment) => {
  await db.get().collection("comments").insertOne(comment);
  return comment;
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
