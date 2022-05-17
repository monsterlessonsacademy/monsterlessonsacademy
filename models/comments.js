const { ObjectId } = require("mongodb");
const db = require("../db");

// exports.all = () => {
//   return db.get().collection("artists").find().toArray();
// };

// exports.findById = (id) => {
//   console.log("ss", ObjectId(id));
//   return db
//     .get()
//     .collection("artists")
//     .findOne({ _id: ObjectId(id) });
// };

exports.create = async (comment) => {
  await db.get().collection("comments").insertOne(comment);
  return comment;
};

// exports.update = async (id, newData) => {
//   await db
//     .get()
//     .collection("artists")
//     .updateOne({ _id: ObjectId(id) }, { $set: newData });
//   return {
//     ...newData,
//     _id: id,
//   };
// };

// exports.delete = (id) => {
//   return db
//     .get()
//     .collection("artists")
//     .deleteOne({ _id: ObjectId(id) });
// };
