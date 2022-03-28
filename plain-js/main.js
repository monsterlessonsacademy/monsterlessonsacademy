const uploadButton = document.querySelector(".upload");

uploadButton.addEventListener("click", () => {
  const apikey = "AZEfHUHuiQc2iiIK7VhUwz";
  const client = filestack.init(apikey);
  const options = {
    onUploadDone: (uploadResponse) => {
      console.log(uploadResponse);
      document
        .querySelector(".logo")
        .setAttribute("src", uploadResponse.filesUploaded[0].url);
    },
  };
  client.picker(options).open();
});
