export type Artist = {
  _id: string;
  name: string;
};

export type ArtistWithoutId = Omit<Artist, "_id">;
