import { useState } from "react";
import axios from "axios";

const App = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const changeFiles = (e) => {
    setFiles(e.target.files);
  };
  const uploadFiles = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const file of files) {
      formData.append("photos", file);
    }
    axios
      .post("http://localhost:3000/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("response", response.data);
        const filenames = response.data.files.map((file) => file.filename);
        setImages(filenames);
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={uploadFiles}>
          <input type="file" multiple onChange={changeFiles} />
          <button type="submit">Upload files</button>
        </form>
      </div>
      <div>
        {images.map((image) => (
          <img key={image} src={`http://localhost:3000/${image}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
