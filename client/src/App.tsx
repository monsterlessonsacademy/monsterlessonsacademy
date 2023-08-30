import axios from "axios";
import { FormEvent, useState } from "react";
import { trpc } from "./trpc";

axios.defaults.baseURL = "http://localhost:3012";

const App = () => {
  const artistsQuery = trpc.artists.all.useQuery();
  const artistsCreateMutation = trpc.artists.create.useMutation();
  const artistsDeleteMutation = trpc.artists.deleteById.useMutation();
  const trpcContext = trpc.useContext();
  const [newArtistName, setNewArtistName] = useState<string>("");
  const addArtist = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    artistsCreateMutation.mutate(
      { name: newArtistName },
      {
        onSuccess: () => {
          trpcContext.artists.all.invalidate();
        },
      }
    );

    setNewArtistName("");
  };

  const deleteArtist = (artistId: string) => {
    artistsDeleteMutation.mutate(
      { _id: artistId },
      {
        onSuccess: () => {
          trpcContext.artists.all.invalidate();
        },
      }
    );
  };

  return (
    <div>
      <h1>Artists</h1>
      <div>
        <form onSubmit={addArtist}>
          <input
            type="text"
            value={newArtistName}
            onChange={(e) => setNewArtistName(e.target.value)}
          />
        </form>
      </div>
      <div>
        {artistsQuery.data?.map((artist) => (
          <div key={artist._id}>
            {artist.name}{" "}
            <span onClick={() => deleteArtist(artist._id)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
