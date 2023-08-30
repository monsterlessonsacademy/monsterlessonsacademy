import { trpc } from "../trpc";
import { artistsRouter } from "./artists";

export const appRouter = trpc.router({
  artists: artistsRouter,
});

export type AppRouter = typeof appRouter;
