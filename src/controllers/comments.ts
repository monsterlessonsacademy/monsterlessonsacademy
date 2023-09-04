import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import * as Comments from "../models/comments";
import * as elements from "typed-html";
// import pug from "pug";

export const all = async (
  _: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const docs = await Comments.all();
    // let template = pug.compileFile("views/includes/comments-list.pug");
    res.send(docs);
  } catch (err) {
    next(err);
  }
};

export const create = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const comment = {
      text: req.body.text,
      parentId: req.body.parentId || null,
      userId: "1",
    };
    const doc = await Comments.create(comment);
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

export const update = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const doc = await Comments.update(req.params.id, req.body);
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    await Comments.deleteById(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
