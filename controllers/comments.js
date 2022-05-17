const Comments = require("../models/comments");

// exports.all = async (_, res, next) => {
//   try {
//     const docs = await Artists.all();
//     res.send(docs);
//   } catch (err) {
//     return next(err);
//   }
// };

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
      body: req.body.body,
      parentId: req.body.parentId,
    };
    const doc = await Artists.create(comment);
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

// exports.update = async (req, res, next) => {
//   try {
//     const doc = await Artists.update(req.params.id, { name: req.body.name });
//     res.send(doc);
//   } catch (err) {
//     return next(err);
//   }
// };

// exports.delete = async (req, res, next) => {
//   try {
//     await Artists.delete(req.params.id);
//     res.sendStatus(200);
//   } catch (err) {
//     return next(err);
//   }
// };
