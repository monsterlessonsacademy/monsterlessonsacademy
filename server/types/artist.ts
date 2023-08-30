import z from "zod";

export const Artist = z.object({
  _id: z.string(),
  name: z.string(),
});

export const ArtistWithoutId = Artist.omit({ _id: true });

export type Artist = z.infer<typeof Artist>;
export type ArtistWithoutId = z.infer<typeof ArtistWithoutId>;
