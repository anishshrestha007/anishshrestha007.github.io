import React, { Component, useState } from "react";
import "./CustomImage.css";
import Input from "@mui/material/Input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CustomImage = () => {
  const [selectedFile, setSeletedFile] = useState(null);

  function onFileChange(event) {
    setSeletedFile(event.target.files[0]);
  }

  //   onFileUpload = () => {
  //     // Create an object of formData
  //     const formData = new FormData();
  //     // Update the formData object
  //     formData.append(
  //       "myFile",
  //       selectedFile,
  //       selectedFile.name
  //     );
  //     // Details of the uploaded file
  //     console.log(selectedFile);
  //     // Request made to the backend api
  //     // Send formData object
  //     axios.post("api/uploadfile", formData);
  //   };

  function fileData() {
    if (selectedFile) {
      return (
        <img
          alt="not found"
          width={"250px"}
          src={URL.createObjectURL(selectedFile)}
        />
      );
    }
  }

  return (
    <div className="custom-image">
      <>
        <label className="custom-file-upload">
          <Input type="file" onChange={onFileChange} />
          {/* <button onClick={this.onFileUpload}>Upload!</button> */}
          <CloudUploadIcon color="action" className="custom-cloud-icon" />{" "}
          Upload
        </label>
      </>
      {fileData()}
    </div>
  );
};

export default CustomImage;
