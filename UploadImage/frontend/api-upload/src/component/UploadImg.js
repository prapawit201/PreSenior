import React, { useState } from "react";
const UploadImg = () => {
  const [file, setFile] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <React.Fragment>
      <img
        src={
          imagePreviewUrl
            ? imagePreviewUrl
            : "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-  id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"
        }
        style={{ width: "500px", height: "500px" }}
      />
      <input type="file" onChange={handleUploadImage} />
      <button> Upload </button>
    </React.Fragment>
  );
};
export default UploadImg;
