import { trpc } from "../trpc";
import { z } from "zod";
import * as ArtistsModel from "../models/artists";
import { Artist, ArtistWithoutId } from "../types/artist";

export const artistsRouter = trpc.router({
  all: trpc.procedure.query(() => {
    return ArtistsModel.all();
  }),
  findById: trpc.procedure.input(z.string()).query(({ input }) => {
    return ArtistsModel.findById(input);
  }),
  create: trpc.procedure.input(ArtistWithoutId).mutation(({ input }) => {
    return ArtistsModel.create(input);
  }),
  deleteById: trpc.procedure
    .input(z.object({ _id: z.string() }))
    .mutation(({ input }) => {
      return ArtistsModel.deleteById(input._id);
    }),
  update: trpc.procedure.input(Artist).mutation(({ input }) => {
    return ArtistsModel.update(input._id, { name: input.name });
  }),
});
