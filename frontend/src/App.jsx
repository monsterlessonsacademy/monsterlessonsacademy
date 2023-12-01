import { useState } from "react";
import axios from "axios";

const App = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const uploadFiles = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photos", files);
    axios
      .post("http://localhost:3000/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("response", response.data);
        setImages([response.data.file.filename]);
      });
  };
  const changeFiles = (e) => {
    setFiles(e.target.files);
  };
  return (
    <div>
      <div>
        <form onSubmit={uploadFiles}>
          <input type="file" onChange={changeFiles} multiple />
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
