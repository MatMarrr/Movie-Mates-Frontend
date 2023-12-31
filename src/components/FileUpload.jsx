import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import userState from "./../recoilStates/userState";
import axios from "axios";

function FileUpload() {
  const apiURL = import.meta.env.VITE_API_URL;
  const fileInputRef = useRef(null);
  const setUser = useSetRecoilState(userState);
  const validFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!validFileTypes.includes(file.type)) {
      alert(
        `Invalid file format\nAllowed formats are: ${validFileTypes
          .join(", ")
          .replace(/image\//g, "")}`
      );

      return;
    }

    await uploadFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      setUser((currentUser) => ({
        ...currentUser,
        avatar_url: "loading",
      }));

      const response = await axios.post(
        `${apiURL}/imgur-upload-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (data.link) {
        console.log("File URL:", data.link);

        setUser((currentUser) => ({
          ...currentUser,
          avatar_url: data.link,
        }));

        await updateAvatarInDatabase(data.link);
      } else {
        throw new Error(data.error || "Failed to upload");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const updateAvatarInDatabase = async (avatarUrl) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      await axios.put(
        `${apiURL}/user/avatar`,
        { avatar_url: avatarUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Avatar URL updated in database");
    } catch (error) {
      console.error("Error updating avatar URL in database:", error);
    }
  };

  FileUpload.triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ display: "none" }}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
