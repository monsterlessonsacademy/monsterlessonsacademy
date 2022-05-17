const Comments = require("../models/comments");

exports.all = async (_, res, next) => {
  try {
    const docs = await Comments.all();
    res.send(docs);
  } catch (err) {
    return next(err);
  }
};

// exports.findById = async (req, res, next) => {
//   try {
//     const doc = await Artists.findById(req.params.id);
//     res.send(doc);
//   } catch (err) {
//     return next(err);
//   }
// };

exports.create = async (req, res, next) => {
  try {
    const comment = {
      body: req.body.text,
      parentId: req.body.parentId,
      userId: "1",
    };
    const doc = await Comments.create(comment);
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const doc = await Comments.update(req.params.id, { body: req.body.text });
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Comments.delete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};
