import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const geTags = async (token) => {
  try {
    const response = await axios.get(
      `https://test-react.agiletech.vn/posts/tags`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AddTable = () => {
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [tags, setTags] = useState([]);
  const [listTagsAdd, setListTagsAdd] = useState([]);
  const renderData = localStorage.getItem("getSignin");
  const [titleErr, setTitleErr] = useState("");
  const [descriptErr, setDescriptErr] = useState("");
  const [tagsErr, setTagsErr] = useState("");
  const navigate = useNavigate();
  //state value err
  const validateInput = () => {
    setTitleErr("");
    setDescriptErr("");
    setTagsErr("");

    let isValid = true;
    if (!title) {
      setTitleErr("Trường title không được bỏ trống.");
      isValid = false;
    }
    if (!descript) {
      setDescriptErr("Trường descript không được bỏ trống");
      isValid = false;
    }

    if (!tags) {
      setTagsErr("Trường tags không được bỏ trống.");
      isValid = false;
    }
    return isValid;
  };
  useEffect(() => {
    if (renderData) {
      geTags(renderData).then((tags) => {
        setListTagsAdd(tags.data);
      });
    }
  }, [renderData]);
  const handleAddUser = () => {
    if (!validateInput()) {
      return;
    }
    const data = {
      title: title,
      description: descript,
      tags: tags,
    };
    axios
      .post("https://test-react.agiletech.vn/posts", data, {
        headers: {
          Authorization: `Bearer ${renderData}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Thêm mới User thành công!");
        setTitle("");
        setDescript("");
        setTags([]);
        navigate("/TableUser");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="card-form">
        <div
          className="input flex-column"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className="input-label">Title</label>
          <input
            type="text"
            className="input-field"
            id="nameUser"
            name="title"
            required
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="error-message mt-2" style={{ color: "red" }}>
            {titleErr}
          </div>
        </div>

        <div
          className="input flex-column"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className="input-label">Description</label>
          <input
            type="text"
            className="input-field"
            id="descriptUser"
            name="descript"
            required
            defaultValue={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
          <div style={{ color: "red" }}>{descriptErr}</div>
        </div>
        {/* <div
          className="input flex-column"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className="input-label">Tags</label>
          <input
            type="text"
            className="input-field"
            id="tagsUser"
            name="tags"
            required
            defaultValue={tags}
            onChange={(e) => setDescript(e.target.value)}
          />
          <div style={{ color: "red" }}>{tagsErr}</div>
        </div> */}
        <div className="mb-3  mt-3" style={{ margin: "0 20px" }} id="divPassW">
          <label htmlFor="tags">Tags</label>
          <select
            name="tags"
            id="cbotags"
            multiple
            defaultValue={tags}
            onChange={(e) => setTags(e.target.value)}
          >
            <option defaultValue="" disabled></option>
            {listTagsAdd.map((tags) => (
              <option key={tags.id} value={tags.id}>
                {tags.name}
              </option>
            ))}
          </select>
        </div>
        {/* ... (other input fields) */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn text-success"
            onClick={handleAddUser}
          >
            + Thêm mới
          </button>
        </div>
      </div>
    </>
  );
};
