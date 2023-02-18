import { useReducer } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

function Write() {
  const state = useLocation().state;
  const navigate = useNavigate();

  const initialPostDetails = {
    title: state?.title || "",
    description: state?.desc || "",
    file: null,
    cat: state?.cat || "",
  };

  const [postDetails, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_TITLE":
        return { ...state, title: action.payload };
      case "SET_DESCRIPTION":
        return { ...state, description: action.payload };
      case "SET_FILE":
        return { ...state, file: action.payload };
      case "SET_CAT":
        return { ...state, cat: action.payload };
      default:
        return state;
    }
  }, initialPostDetails);

  const categoryButtonsValues = [
    { value: "art", id: "art", label: "Art" },
    { value: "science", id: "science", label: "Science" },
    { value: "technology", id: "technology", label: "Technology" },
    { value: "cinema", id: "cinema", label: "Cinema" },
    { value: "design", id: "design", label: "Design" },
    { value: "food", id: "food", label: "Food" },
  ];

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      if (postDetails.file) {
        formData.append("file", postDetails.file);
        const res = await axios.post("/upload", formData);
        // console.log(res.data);
        return res.data.filename;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imgUrl = await uploadFile();
    try {
      // post to database
      const res = state
        ? await axios.put(`/posts/${state.id}`, {
            title: postDetails.title,
            desc: postDetails.description,
            cat: postDetails.cat,
            [postDetails.file && "img"]: `/uploads/${imgUrl}`,
          })
        : await axios.post("/posts", {
            title: postDetails.title,
            desc: postDetails.description,
            cat: postDetails.cat,
            // img: postDetails.file ? `/uploads/${imgUrl}` : "",
            [postDetails.file && "img"]: `/uploads/${imgUrl}`,
            date: DateTime.now().toFormat("yyyy-MM-dd hh:mm:ss"),
          });

      console.log(res);
      state ? navigate(`/post/${state.id}`) : navigate(`/post/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={postDetails.title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={postDetails.description}
            onChange={(data) =>
              dispatch({ type: "SET_DESCRIPTION", payload: data })
            }
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Public
          </span>
          {/* use firestore or cloudinary to store images in actual applications */}
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) =>
              dispatch({ type: "SET_FILE", payload: e.target.files[0] })
            }
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {categoryButtonsValues.map((button) => (
            <RadioButtons
              {...button}
              key={button.key}
              checked={postDetails.cat === button.value}
              onChange={(e) =>
                dispatch({ type: "SET_CAT", payload: e.target.value })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RadioButtons({ value, id, label, onChange, checked }) {
  return (
    <div className="cat">
      <input
        type="radio"
        name="cat"
        checked={checked}
        value={value}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Write;
