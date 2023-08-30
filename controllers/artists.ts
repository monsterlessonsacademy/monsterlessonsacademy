import * as Artists from "../models/artists";
import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";

export const all = async (
  _: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const docs = await Artists.all();
    res.send(docs);
  } catch (err) {
    next();
  }
};

export const findById = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const doc = await Artists.findById(req.params.id);
    res.send(doc);
  } catch (err) {
    next();
  }
};

export const create = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const doc = await Artists.create({ name: req.body.name });
    res.send(doc);
  } catch (err) {
    next();
  }
};

export const update = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    const doc = await Artists.update(req.params.id, { name: req.body.name });
    res.send(doc);
  } catch (err) {
    next();
  }
};

export const deleteById = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) => {
  try {
    await Artists.deleteById(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    next();
  }
};
