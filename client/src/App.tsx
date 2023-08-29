import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Artist } from "./types/Artist";

axios.defaults.baseURL = "http://localhost:3012";

const App = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [newArtistName, setNewArtistName] = useState<string>("");
  const addArtist = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<Artist>("/artists", { name: newArtistName })
      .then((response) => {
        const updatedArtists = [...artists, response.data];
        setArtists(updatedArtists);
      });

    setNewArtistName("");
  };

  const deleteArtist = (artistId: string) => {
    axios.delete(`/artists/${artistId}`).then(() => {
      const updatedArtists = artists.filter(
        (artist) => artist._id !== artistId
      );
      setArtists(updatedArtists);
    });
  };

  useEffect(() => {
    axios.get<Artist[]>("/artists").then((response) => {
      setArtists(response.data);
    });
  }, []);

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
        {artists.map((artist) => (
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
