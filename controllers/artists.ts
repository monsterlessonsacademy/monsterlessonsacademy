import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import * as Artists from "../models/artists";

export const all = async (
  _: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): Promise<void> => {
  try {
    const docs = await Artists.all();
    res.send(docs);
  } catch (err) {
    next(err);
  }
};

export const findById = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): Promise<void> => {
  try {
    const doc = await Artists.findById(req.params.id);
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

export const create = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): Promise<void> => {
  try {
    const artist = {
      name: req.body.name,
    };
    const doc = await Artists.create(artist);
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

export const update = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): Promise<void> => {
  try {
    const doc = await Artists.update(req.params.id, { name: req.body.name });
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

export const deleteById = async (
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): Promise<void> => {
  try {
    await Artists.deleteById(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};
